import sys
import numpy
import pyfits
import os 
import sqlite3
"""
A tool to parse the 3FGL catalog
"""

##########################################################################################

def fits2json(filename):

	# Open the file
	fits = pyfits.open(filename)

	# Extract the columns
	Source_Name = fits[1].data.field('Source_Name')
	RAJ2000 = fits[1].data.field('RAJ2000')
	DEJ2000 = fits[1].data.field('DEJ2000')
	GLON = fits[1].data.field('GLON')
	GLAT = fits[1].data.field('GLAT')
	CLASS1 = fits[1].data.field('CLASS1')
	Flux = fits[1].data.field('Flux1000')

	hist, bin_edges = numpy.histogram(numpy.log10(Flux))
	Sizes = []
	for logflux in numpy.log10(Flux):
		size = 1
		for bin_edge in bin_edges:
			if logflux <= bin_edge:
				Sizes.append(size)
				break;
			size = size + 1

	Sizes = numpy.array(Sizes)
	# Sizes = Sizes *			

	print bin_edges

	# Write the results to a file
	json = filename.replace('.fit','.json')

	output = open(json, 'w')

	lineNumber = 1
	for source_name, raj2000, dej2000, glon, glat, class1, flux, size in zip(Source_Name, RAJ2000, DEJ2000, GLON, GLAT, CLASS1, Flux, Sizes):

		# If the source class is not known, classify it as unassociated 
		if class1 == "":
			class1 = 'unassoc'

		if lineNumber == 1:
			output.write('[{"Source_Name": "%s", "RAJ2000": "%s", "DEJ2000": "%s", "GLON": "%s", "GLAT": "%s", "CLASS1": "%s", "Flux": "%s", "Size": "%s" },\n' % (source_name, raj2000, dej2000, glon, glat, class1, flux, size) )
		elif lineNumber != len(Source_Name):
			output.write('{"Source_Name": "%s", "RAJ2000": "%s", "DEJ2000": "%s", "GLON": "%s", "GLAT": "%s", "CLASS1": "%s", "Flux": "%s", "Size": "%s" },\n' % (source_name, raj2000, dej2000, glon, glat, class1, flux, size) )
		else:
			output.write('{"Source_Name": "%s", "RAJ2000": "%s", "DEJ2000": "%s", "GLON": "%s", "GLAT": "%s", "CLASS1": "%s", "Flux": "%s", "Size": "%s" }]' % (source_name, raj2000, dej2000, glon, glat, class1, flux, size) )

		lineNumber = lineNumber + 1

	# Close the file
	output.close()
	print "\nWriting to file: %s" % json


##########################################################################################

def fits2db(filename):

	# Open the file
	fits = pyfits.open(filename)

	# Create the database file
	database = filename.replace('.fit', '.db')

	# Extract the column information
	columns = fits[1].data.columns

	# Extract the column keys
	keys = fits[1].data.names
	keys.append('Size')
	keys.append('Type')

	# Define the keys to skip
	keys2skip = ['Flux_History','Unc_Flux_History']

	# Calculate the size of the points to be used in the interactive map
	Flux = fits[1].data.field('Flux1000')
	hist, bin_edges = numpy.histogram(numpy.log10(Flux))
	Sizes = []
	for logflux in numpy.log10(Flux):
		size = 1
		for bin_edge in bin_edges:
			if logflux <= bin_edge:
				Sizes.append(size)
				break;
			size = size + 1

	# Create human readable class names
	Types = []
	Class1 = fits[1].data.field('Class1')
	for class1 in Class1:
		class1 = class1.upper()
		if len(class1) == 0: Types.append('Unassociated')
		if 'BCU' in class1: Types.append('Blazar candidate')
		if 'BIN' in class1: Types.append('Binary')
		if 'BLL' in class1: Types.append('BL LAC')
		if 'FSRQ' in class1: Types.append('FSRQ')
		if 'GAL' in class1: Types.append('Normal galaxy')
		if 'HMB' in class1: Types.append('High-mass binary')
		if 'NLSY1' in class1: Types.append('Narrow line Seyfert 1')
		if 'NOV' in class1: Types.append('Nova')
		if 'PSR' in class1: Types.append('Pulsar')
		if 'PWN' in class1: Types.append('Pulsar wind nebula')
		if 'RDG' in class1: Types.append('Radio galaxy')
		if 'SFR' in class1: Types.append('Star-forming region')
		if 'SNR' in class1: Types.append('Supernova remnant')
		if 'AGN' in class1: Types.append('Non-blazar active galaxy')
		if 'CSS' in class1: Types.append('Compact steep spectrum quasar')
		if 'GLC' in class1: Types.append('Globular cluster')
		if 'SBG' in class1: Types.append('Starburst galaxy')
		if 'SEY' in class1: Types.append('Seyfert galaxy')
		if 'SPP' in class1: Types.append('SNR/PWN')
		if 'SSRQ' in class1: Types.append('Soft spectrum radio quasar')

	print len(Class1)
	print ""
	print len(Sizes)
	print ""
	print len(Types)


	# Start the table creation command
	createCommand = "sqlite3 %s \"create table Catalog ( " % database

	# Generate the table creation command
	for column in columns:
		if column.name not in keys2skip:
			createCommand = createCommand + "\'" + column.name + "\'"

			if 'A' in column.format:
				createCommand = createCommand + ' TEXT, '
			elif 'I' in column.format:
				createCommand = createCommand + ' INT, '			
			else:
				createCommand = createCommand + ' FLOAT, '

	createCommand = createCommand + "\'Size\'" + ' FLOAT, '
	createCommand = createCommand + "\'Type\'" + ' TEXT, '

	# Finish the table creation command
	createCommand = createCommand[0:-2] + ')\"'

	# Create the database file
	print 'Creating table:'
	print '%s\n' % createCommand
	os.system(createCommand)


	# Initilize the database connection
	connection = None
	connection = sqlite3.connect(database)

	# Insert data into the database
	with connection:

		# Create the cursor object
		cursor = connection.cursor()

		for i in range(len(fits[1].data.field(keys[0]))):

			sys.stdout.write("Importing: %d%%   \r" % (float(i)/len(fits[1].data.field(keys[0])) * 100) )
			sys.stdout.flush()

			insertCommand = 'INSERT INTO Catalog VALUES('

			for key in keys:

				if key not in keys2skip:

					if key == 'Size':
						insertCommand = insertCommand + "\'%s\'," % Sizes[i]

					elif key == 'Type':
						insertCommand = insertCommand + "\'%s\'," % Types[i]

					elif type(fits[1].data.field(key)[i]) == numpy.ndarray:
						insertCommand = insertCommand + "\'%s %s\'," % (fits[1].data.field(key)[i][0], fits[1].data.field(key)[i][1])	

					else:
						insertCommand = insertCommand + "\'%s\'," % fits[1].data.field(key)[i]

			insertCommand = insertCommand[0:-1] + ')'

			# print insertCommand
			cursor.execute(insertCommand)

	print "\nDone."




##########################################################################################

def makeDataFiles(filename):


	catalog = filename
	print 'Reading catalog file: %s' % catalog
	fits = pyfits.open(catalog)

	numberOfSources = len(fits[1].data)

	METStart = fits[4].data.field('START')[0]
	METStop = fits[4].data.field('STOP')[-1]

	dt = (METStop-METStart)/48.
	METs = numpy.arange(METStart,METStop,dt) + dt/2.0

	MJDStart = 54697.83542089
	MJDEnd = 56124.76831267
	dt = (MJDEnd-MJDStart)/48.
	MJDs = numpy.arange(MJDStart, MJDEnd, dt) + dt/2.0
	MJDs = MJDs.astype('int')

	FluxNormalization = 1e-8
	SpectralFluxNormalization = 1e-10

	data = fits[1].data
	SourceName = data.field('Source_Name')
	FluxHistory = data.field('Flux_History')
	FluxHistoryNormalized = data.field('Flux_History')/FluxNormalization
	Unc_Flux_History = data.field('Unc_Flux_History')
	Unc_Flux_HistoryNormalized = data.field('Unc_Flux_History')/FluxNormalization
	Association = data.field('ASSOC1')
	AssociationGamma = data.field('ASSOC_GAM1')
	RA = data.field('RAJ2000')
	Dec = data.field('DEJ2000')
	GLON = data.field('GLON')
	GLAT = data.field('GLAT')
	Flux1000_3000 = data.field('Flux1000_3000')
	Spectral_Index = data.field('Spectral_Index')
	Spectral_Index_Error = data.field('Unc_Spectral_Index')
	Class = data.field('CLASS1')

	# Extract the photon flux data
	Flux100_300 = fits[1].data.field('Flux100_300')/SpectralFluxNormalization
	Flux300_1000 = fits[1].data.field('Flux300_1000')/SpectralFluxNormalization
	Flux1000_3000 = fits[1].data.field('Flux1000_3000')/SpectralFluxNormalization
	Flux3000_10000 = fits[1].data.field('Flux3000_10000')/SpectralFluxNormalization
	Flux10000_100000 = fits[1].data.field('Flux10000_100000')/SpectralFluxNormalization

	# Extract the photon flux errors 
	Unc_Flux100_300 = fits[1].data.field('Unc_Flux100_300')/SpectralFluxNormalization
	Unc_Flux300_1000 = fits[1].data.field('Unc_Flux300_1000')/SpectralFluxNormalization
	Unc_Flux1000_3000 = fits[1].data.field('Unc_Flux1000_3000')/SpectralFluxNormalization
	Unc_Flux3000_10000 = fits[1].data.field('Unc_Flux3000_10000')/SpectralFluxNormalization
	Unc_Flux10000_100000 = fits[1].data.field('Unc_Flux10000_100000')/SpectralFluxNormalization

	# Extract the energy nuFnu data
	nuFnu100_300 = fits[1].data.field('nuFnu100_300')/SpectralFluxNormalization
	nuFnu300_1000 = fits[1].data.field('nuFnu300_1000')/SpectralFluxNormalization
	nuFnu1000_3000 = fits[1].data.field('nuFnu1000_3000')/SpectralFluxNormalization
	nuFnu3000_10000 = fits[1].data.field('nuFnu3000_10000')/SpectralFluxNormalization
	nuFnu10000_100000 = fits[1].data.field('nuFnu10000_100000')/SpectralFluxNormalization

	# Setup the time arrays
	MET_String = numpy.array_str(METs).replace('   ',', ').replace('\n',' ')
	MJDs_String = repr(MJDs).replace('array(','').replace('\n','').replace(')','')

	# Setup the energy arrays
	energyRange = [int((100*300)**0.5), int((300*1000)**0.5), int((1000*3000)**0.5), int((3000*10000)**0.5), int((10000*100000)**0.5)]

	n = 0
	print "Writing data files..."
	for sourceName, fluxHistory, fluxHistoryError, flux100_300, flux300_1000, flux1000_3000, flux3000_10000, flux10000_100000, unc_flux100_300, unc_flux300_1000, unc_flux1000_3000, unc_flux3000_10000, unc_flux10000_100000 in zip(SourceName, FluxHistoryNormalized, Unc_Flux_HistoryNormalized, Flux100_300, Flux300_1000, Flux1000_3000, Flux3000_10000, Flux10000_100000, Unc_Flux100_300, Unc_Flux300_1000, Unc_Flux1000_3000, Unc_Flux3000_10000, Unc_Flux10000_100000):
		
		sourceNameCompact = sourceName.replace('3FGL ','3FGL_')

		fluxHistoryErrorAbsolute = []

		for ydatum, error in zip(fluxHistory, fluxHistoryError):
			errorMin = error[0]
			errorMax = error[1]

			if numpy.isnan(errorMin):
				errorMinAbsolute = 0
				errorMaxAbsolute = 	ydatum + (errorMax * 2.0)
			else:
				errorMinAbsolute = 	ydatum + errorMin
				errorMaxAbsolute = 	ydatum + errorMax

			fluxHistoryErrorAbsolute.append([errorMinAbsolute,errorMaxAbsolute])

		fluxHistoryErrorAbsolute = numpy.array(fluxHistoryErrorAbsolute)

		fluxHistory_string = repr(fluxHistory).replace('array(','').replace('\n','').replace(', dtype=float32)','')
		fluxHistoryError_string = repr(fluxHistoryErrorAbsolute).replace('array(','').replace('\n','').replace(')','')


		# # Setting up the spectral flux and errors
		# spectrum = [flux100_300, flux300_1000, flux1000_3000, flux3000_10000, flux10000_100000]
		# spectrumError = [unc_flux100_300, unc_flux300_1000, unc_flux1000_3000, unc_flux3000_10000, unc_flux10000_100000]

		# spectrumErrorAbsolute = []

		# for ydatum, error in zip(spectrum, spectrumError):
		# 	errorMin = error[0]
		# 	errorMax = error[1]

		# 	if numpy.isnan(errorMin):
		# 		errorMinAbsolute = 0
		# 		errorMaxAbsolute = 	ydatum + (errorMax * 2.0)
		# 	else:
		# 		errorMinAbsolute = ydatum + errorMin
		# 		errorMaxAbsolute = ydatum + errorMax

		# 	spectrumErrorAbsolute.append([errorMinAbsolute,errorMaxAbsolute])

		# spectrumErrorAbsolute = numpy.array(spectrumErrorAbsolute)

		# energyRange_string = repr(energyRange).replace('array(','').replace('\n','').replace(', dtype=float32)','')
		# spectrum_string = repr(spectrum).replace('array(','').replace('\n','').replace(', dtype=float32)','')
		# spectrumErrorAbsolute_string = repr(spectrumErrorAbsolute).replace('array(','').replace('\n','').replace(')','').replace(', dtype=float32','')


		# Setting up the spectral flux and errors
		spectrum = [flux100_300, flux300_1000, flux1000_3000, flux3000_10000, flux10000_100000]
		spectrumError = [unc_flux100_300, unc_flux300_1000, unc_flux1000_3000, unc_flux3000_10000, unc_flux10000_100000]

		spectrumDataCombined = []
		spectrumErrorAbsolute = []

		for ydatum, error, energy in zip(spectrum, spectrumError, energyRange):
			errorMin = error[0]
			errorMax = error[1]

			if numpy.isnan(errorMin):
				errorMinAbsolute = 0
				errorMaxAbsolute = 	ydatum + (errorMax * 2.0)
			else:
				errorMinAbsolute = ydatum + errorMin
				errorMaxAbsolute = ydatum + errorMax

			spectrumDataCombined.append([energy, ydatum])
			spectrumErrorAbsolute.append([energy, errorMinAbsolute, errorMaxAbsolute])

		spectrumDataCombined = numpy.array(spectrumDataCombined)
		spectrumErrorAbsolute = numpy.array(spectrumErrorAbsolute)

		energyRange_string = repr(energyRange).replace('array(','').replace('\n','').replace(', dtype=float32)','')
		spectrum_string = repr(spectrumDataCombined).replace('array(','').replace('\n','').replace(')','')
		spectrumErrorAbsolute_string = repr(spectrumErrorAbsolute).replace('array(','').replace('\n','').replace(')','').replace(', dtype=float32','')


		# Comments
		comments = "\n// Time units in Modified Julian Date (MJD)\n// FluxHistory units in 1e-8 x photons/cm/s\n// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]\n// Energy in units of MeV\n// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]\n// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]"

		# bad = numpy.where(fluxHistory == 0)
		# fluxHistory_stringArray = fluxHistory.astype('str')
		# fluxHistory_stringArray[bad] = '0'
		# fluxHistory_string = numpy.array_str(fluxHistory_stringArray).replace('\n','').replace(' ',',').replace('\'','')
		# fluxHistoryError_string =  numpy.array_str(fluxHistoryError).replace('\n ', ', ').replace('        nan','0').replace('  ',', ')

		filename = '%s.js' % sourceNameCompact
		output = open(filename, 'w')
		output.write("Time = %s\n" % MJDs_String)
		output.write("FluxHistory = %s\n" % fluxHistory_string)
		output.write("FluxHistoryError = %s\n" % fluxHistoryError_string)
		output.write("Energy = %s\n" % energyRange_string)
		output.write("Spectrum = %s\n" % spectrum_string)
		output.write("SpectrumError = %s\n" % spectrumErrorAbsolute_string)
		output.write(comments)
		output.close()

		sys.stdout.write("Progress: %d%%   \r" % (float(n)/numberOfSources * 100) )
		sys.stdout.flush()


##########################################################################################


def fits2js(filename):

	# Open the file
	fits = pyfits.open(filename)

	# Extract the columns
	Source_Name = fits[1].data.field('Source_Name')
	GLON = fits[1].data.field('GLON')
	GLAT = fits[1].data.field('GLAT')
	Flux = fits[1].data.field('Flux1000')

	hist, bin_edges = numpy.histogram(numpy.log10(Flux))
	Sizes = []
	for logflux in numpy.log10(Flux):
		size = 1
		for bin_edge in bin_edges:
			if logflux <= bin_edge:
				Sizes.append(size)
				break;
			size = size + 1

	Sizes = numpy.array(Sizes)
	# Sizes = Sizes *			

	# print bin_edges

	# Write the results to a file
	js = filename.replace('.fit','.js')

	output = open(js, 'w')

	lineNumber = 1
	for source_name, glon, glat, size in zip(Source_Name, GLON, GLAT, Sizes):

		if lineNumber == 1:
			output.write('sources3FGL = [[%s, %s, %s ],\n' % (glon, glat, size) )
		elif lineNumber != len(Source_Name):
			output.write('[%s, %s, %s ],\n' % (glon, glat, size) )
		else:
			output.write('[%s, %s, %s ]]\n' % (glon, glat, size) )

		lineNumber = lineNumber + 1

	# Close the file
	output.close()
	print "\nWriting to file: %s" % js


##########################################################################################

        
if __name__=='__main__':

	# Extract the user supplied argument
	if(len(sys.argv) > 1):
		filename = sys.argv[1]

		# Convert the fits file to a json file with select parameters
		fits2json(filename)

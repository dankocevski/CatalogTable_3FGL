import pyfits
import numpy
import json

catalog = '/Users/kocevski/Research/Analysis/FAVA/Resources/gll_psc_v16.fit'
fits = pyfits.open(catalog)

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



# print '<tr>'
# print '	<th>SourceName</th>'
# print '	<th>Association</th>'
# print '	<th>RA</th>'
# print '	<th>Dec</th>'
# print '	<th>Gal l</th>'
# print '	<th>Gal b</th>'
# print '	<th>Flux 1-100 GeV (ph/cm2/s)</th>'
# print '	<th>Spectral Index</th>'
# print '	<th>Spectral Index Error</th>'
# print '	<th>Optical Classification</th>'
# print '	<th></th>'
# print '	<th></th>'
# print '</tr>'

# n = 0
# for sourceName, association, ra, dec, glon, glat, flux1000_3000, spectral_Index, spectral_Index_Error, class1 in zip(SourceName, Association, RA, Dec, GLON, GLAT, Flux1000_3000, Spectral_Index, Spectral_Index_Error, Class):

# 	sourceNameCompact = sourceName.replace('3FGL ','3FGL_')

# 	print '<tr>'
# 	print '	<td>%s</td>' % sourceName
# 	print '	<td>%s</td>' % association
# 	print '	<td>%s</td>' % ra
# 	print '	<td>%s</td>' % dec
# 	print '	<td>%s</td>' % glon
# 	print '	<td>%s</td>' % glat
# 	print '	<td>%s</td>' % flux1000_3000
# 	print '	<td>%s</td>' % spectral_Index
# 	print '	<td>%s</td>' % spectral_Index_Error
# 	print '	<td>%s</td>' % class1
# 	print '	<td><a href="#">Data Access</a></td>'
# 	print '	<td><a href="FluxHistory.html?Source=%s" onclick="window.open(this.href,\'targetWindow\',\'width=1100px, height=600px\'); return false;">Light Curve</a></td>' % sourceNameCompact
# 	print '</tr>'
# 	if n == 10:
# 		break
# 	else:
# 		n = n + 1


MET_String = numpy.array_str(METs).replace('   ',', ').replace('\n',' ')
MJDs_String = repr(MJDs).replace('array(','').replace('\n','').replace(')','')

n = 0
for sourceName, fluxHistory, fluxHistoryError in zip(SourceName, FluxHistoryNormalized, Unc_Flux_HistoryNormalized):
	
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
	output.close()


	if n == 10:
		break
	else:
		n = n + 1
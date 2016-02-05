Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.71221924,  1.05523407,  0.87632436,  0.85297769,  0.7965402 ,        0.        ,  0.        ,  0.        ,  0.        ,  2.09978795,        1.5216291 ,  3.47396779,  2.55150628,  1.86895442,  0.58546311,        2.64906168,  1.89145768,  0.        ,  0.        ,  1.3064121 ,        3.01751328,  2.52168894,  2.12613893,  1.99373376,  0.68605125,        4.50264168,  4.14315987,  2.59071994,  1.29055643,  0.        ,        1.71906686,  2.72484922,  0.        ,  0.15793979,  0.        ,        2.23553443,  1.34520471,  1.83392203,  2.04415512,  0.        ,        0.51766562,  2.7189405 ,  0.        ,  0.61664116,  0.52198768,        2.59898996,  2.8966279 ,  0.        ]
FluxHistoryError = [[ 0.        ,  3.79273081],       [ 0.        ,  4.14193785],       [ 0.        ,  3.67506331],       [ 0.        ,  4.01443428],       [ 0.        ,  4.04938287],       [ 0.        ,  2.80603266],       [ 0.        ,  2.20499921],       [ 0.        ,  2.99702477],       [ 0.        ,  3.42771745],       [ 0.6460799 ,  3.62142992],       [ 0.04820108,  3.13117361],       [ 1.89262557,  5.20977879],       [ 1.02344525,  4.22208357],       [ 0.        ,  5.93064141],       [ 0.        ,  2.64071947],       [ 0.56782413,  4.88032532],       [ 0.68879557,  3.23456836],       [ 0.        ,  2.77269483],       [ 0.        ,  2.02385283],       [ 0.        ,  4.10080278],       [ 1.14841723,  5.19248676],       [ 1.27062368,  3.97789216],       [ 0.1820507 ,  4.30912685],       [ 0.79272974,  3.29396558],       [ 0.        ,  3.92789328],       [ 2.90497422,  6.2604332 ],       [ 2.7353971 ,  5.7049346 ],       [ 0.99942231,  4.34546852],       [ 0.26212001,  2.47867537],       [ 0.        ,  3.31887436],       [ 0.63966155,  2.93020582],       [ 1.32696021,  4.44395113],       [ 0.        ,  2.84561682],       [ 0.        ,  2.37377059],       [ 0.        ,  2.96027827],       [ 1.08041966,  3.5746839 ],       [ 0.        ,  5.3729037 ],       [ 0.81473863,  3.08750582],       [ 0.43453121,  3.89324713],       [ 0.        ,  2.60632682],       [ 0.        ,  2.94120264],       [ 0.89655793,  4.70586872],       [ 0.        ,  2.44876361],       [ 0.        ,  4.37521446],       [ 0.        ,  3.09873247],       [ 0.90271556,  4.48626947],       [ 1.49838221,  4.44661903],       [ 0.        ,  2.75646377]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.32481430e+02],       [  5.47000000e+02,   1.12434187e+01],       [  1.73200000e+03,   3.33566427e+00],       [  5.47700000e+03,   8.39148283e-01],       [  3.16220000e+04,   3.18355769e-01]]
SpectrumError = [[  1.73000000e+02,   1.02202240e+02,   1.62722137e+02],       [  5.47000000e+02,   6.15638828e+00,   1.65161572e+01],       [  1.73200000e+03,   2.24240971e+00,   4.51522160e+00],       [  5.47700000e+03,   5.20627618e-01,   1.22764874e+00],       [  3.16220000e+04,   1.58015296e-01,   5.36427796e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]
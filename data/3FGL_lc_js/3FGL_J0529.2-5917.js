Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 1.24206126,  0.        ,  0.63365209,  1.12302792,  0.30674067,        2.03596544,  0.        ,  0.        ,  1.07372558,  0.93305695,        0.        ,  0.        ,  2.16749954,  0.        ,  0.53620642,        0.        ,  0.        ,  0.60035509,  1.49161553,  1.12530875,        1.3909837 ,  1.16411054,  1.06967854,  0.        ,  0.        ,        1.07178521,  0.        ,  0.9582023 ,  1.13405561,  0.46989471,        0.        ,  1.93824494,  1.59472406,  0.        ,  0.17261551,        0.96895844,  1.32999039,  0.5141294 ,  0.        ,  0.        ,        1.34558022,  0.        ,  0.        ,  0.        ,  0.        ,        1.60828555,  1.94165504,  1.44654906]
FluxHistoryError = [[ 0.        ,  4.21775186],       [ 0.        ,  1.87061179],       [ 0.        ,  2.7941345 ],       [ 0.        ,  3.86282122],       [ 0.        ,  3.41158119],       [ 0.96190262,  3.20524931],       [ 0.        ,  1.94323385],       [ 0.        ,  2.39507484],       [ 0.16631508,  2.27653503],       [ 0.28400469,  1.77953839],       [ 0.        ,  2.19094515],       [ 0.        ,  1.85996139],       [ 1.12347329,  3.39457941],       [ 0.        ,  2.35275888],       [ 0.        ,  2.68453521],       [ 0.        ,  1.23976648],       [ 0.        ,  1.77408707],       [ 0.        ,  2.4264254 ],       [ 0.64344394,  2.57790756],       [ 0.17854095,  2.19739199],       [ 0.50446743,  2.46619534],       [ 0.1681934 ,  2.3244853 ],       [ 0.25739223,  2.0065062 ],       [ 0.        ,  2.31503391],       [ 0.        ,  2.16967416],       [ 0.39659178,  2.01611757],       [ 0.        ,  1.74422038],       [ 0.        ,  3.28924602],       [ 0.31230211,  2.16262674],       [ 0.        ,  2.09056419],       [ 0.        ,  1.51769745],       [ 1.06000113,  2.96737051],       [ 0.68625832,  2.72115159],       [ 0.        ,  1.77191412],       [ 0.        ,  1.8605132 ],       [ 0.        ,  3.23958355],       [ 0.48564065,  2.37913656],       [ 0.        ,  3.16396451],       [ 0.        ,  1.79965639],       [ 0.        ,  2.46677876],       [ 0.53623128,  2.32781076],       [ 0.        ,  1.87589467],       [ 0.        ,  1.79245698],       [ 0.        ,  1.25253928],       [ 0.        ,  2.06523395],       [ 0.68312037,  2.64169478],       [ 0.69934571,  3.35275698],       [ 0.67944968,  2.40471697]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   6.54447250e+01],       [  5.47000000e+02,   9.33887577e+00],       [  1.73200000e+03,   1.84149992e+00],       [  5.47700000e+03,   5.46172202e-01],       [  3.16220000e+04,   2.47332811e-01]]
SpectrumError = [[  1.73000000e+02,   2.35571556e+01,   1.02167984e+02],       [  5.47000000e+02,   5.18643236e+00,   1.36717405e+01],       [  1.73200000e+03,   1.16259730e+00,   2.64092255e+00],       [  5.47700000e+03,   3.30285013e-01,   8.20283651e-01],       [  3.16220000e+04,   1.10035866e-01,   4.32130396e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]
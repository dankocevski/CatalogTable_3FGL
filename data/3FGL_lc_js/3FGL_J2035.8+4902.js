Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.        ,  0.        ,  1.17922819,  1.98375773,        0.71055311,  0.        ,  2.61113667,  0.        ,  3.76586699,        0.91421485,  0.        ,  3.51917315,  0.20442313,  0.        ,        1.60753405,  1.16012311,  1.03872347,  0.        ,  3.95599294,        1.12807631,  0.        ,  0.        ,  0.68368059,  0.57359344,        1.28011823,  0.        ,  0.        ,  2.05756259,  0.90951139,        0.62734914,  0.        ,  0.        ,  0.        ,  0.33604136,        1.40349591,  0.        ,  1.2523092 ,  0.        ,  2.91702533,        1.29706454,  2.47463465,  0.        ,  2.59770679,  0.        ,        1.0963248 ,  0.        ,  0.62792212]
FluxHistoryError = [[ 0.        ,  4.24099636],       [ 0.        ,  3.7045691 ],       [ 0.        ,  2.24166393],       [ 0.29149175,  2.63127017],       [ 0.6574955 ,  3.62459612],       [ 0.        ,  4.17602247],       [ 0.        ,  3.9970336 ],       [ 0.83304107,  4.64558125],       [ 0.        ,  2.41844654],       [ 2.07068634,  5.65608644],       [ 0.09384203,  2.2149601 ],       [ 0.        ,  2.42419052],       [ 1.89271927,  5.33477116],       [ 0.        ,  3.27808636],       [ 0.        ,  2.13618612],       [ 0.62735474,  3.15894246],       [ 0.        ,  4.51455808],       [ 0.        ,  4.23099875],       [ 0.        ,  3.21908474],       [ 2.50014997,  5.97269297],       [ 0.36803985,  2.40341902],       [ 0.        ,  2.44508004],       [ 0.        ,  2.48949218],       [ 0.        ,  4.03397161],       [ 0.        ,  3.42357355],       [ 0.        ,  5.06369162],       [ 0.        ,  3.37532806],       [ 0.        ,  2.18070364],       [ 0.80320406,  3.61783695],       [ 0.        ,  3.90778762],       [ 0.        ,  4.12543249],       [ 0.        ,  2.49179649],       [ 0.        ,  3.81331229],       [ 0.        ,  1.43562829],       [ 0.        ,  3.49113789],       [ 0.38736677,  2.87192345],       [ 0.        ,  2.59765339],       [ 0.24892688,  2.646276  ],       [ 0.        ,  2.60808325],       [ 1.50832176,  4.59247017],       [ 0.1049    ,  2.82743526],       [ 0.98390973,  4.40153885],       [ 0.        ,  3.36018991],       [ 1.24098563,  4.08418608],       [ 0.        ,  3.12718105],       [ 0.        ,  4.0558511 ],       [ 0.        ,  2.29010534],       [ 0.        ,  3.23252255]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   5.43665314e+01],       [  5.47000000e+02,   1.18418703e+01],       [  1.73200000e+03,   7.32002878e+00],       [  5.47700000e+03,   1.25379264e+00],       [  3.16220000e+04,   3.99514556e-01]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   2.45464294e+02],       [  5.47000000e+02,   3.54510307e-01,   2.32760315e+01],       [  1.73200000e+03,   5.20762396e+00,   9.49429321e+00],       [  5.47700000e+03,   7.70717859e-01,   1.85190821e+00],       [  3.16220000e+04,   2.30727240e-01,   6.20049357e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]
Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.        ,  0.19757837,  0.63253206,  0.        ,        0.        ,  1.56383955,  0.96587414,  0.        ,  0.        ,        0.        ,  0.        ,  4.44788456,  4.72656631,  0.72675544,        3.72630072,  1.26516783,  3.57189083,  1.34602833,  1.3816936 ,        0.        ,  0.55202436,  0.35946131,  0.        ,  3.23295522,        0.        ,  2.69990325,  0.        ,  4.85339689,  0.        ,        3.31467652,  0.53012735,  1.13391364,  2.5084641 ,  4.94378281,        0.        ,  0.22673672,  1.51238346,  0.        ,  0.30034822,        2.30947661,  0.        ,  0.45038849,  3.26667237,  1.05931938,        2.11706662,  0.87465483,  0.        ]
FluxHistoryError = [[ 0.        ,  2.43479061],       [ 0.        ,  2.34572291],       [ 0.        ,  2.62192935],       [ 0.        ,  3.05423182],       [ 0.        ,  2.03172898],       [ 0.        ,  2.39296865],       [ 0.64489675,  2.73847723],       [ 0.        ,  3.79507869],       [ 0.        ,  2.97465801],       [ 0.        ,  2.15431905],       [ 0.        ,  2.18060899],       [ 0.        ,  2.74117756],       [ 2.65538168,  6.44390821],       [ 2.95055771,  6.70265961],       [ 0.        ,  3.77724224],       [ 2.08839965,  5.63106346],       [ 0.        ,  4.69741786],       [ 1.99081647,  5.37711   ],       [ 0.46657056,  2.62100148],       [ 0.38240981,  3.01838017],       [ 0.        ,  2.52743554],       [ 0.        ,  3.56693673],       [ 0.        ,  3.4397409 ],       [ 0.        ,  2.42667961],       [ 1.5295409 ,  5.11265659],       [ 0.        ,  2.84266806],       [ 1.25319648,  4.36198997],       [ 0.        ,  2.11883259],       [ 3.16159058,  6.73316336],       [ 0.        ,  2.64183426],       [ 1.8769989 ,  4.96601105],       [ 0.        ,  3.27507836],       [ 0.        ,  4.81868136],       [ 1.30693376,  3.96757603],       [ 3.42766142,  6.64010525],       [ 0.        ,  2.51066875],       [ 0.        ,  3.62871307],       [ 0.33248723,  3.09249735],       [ 0.        ,  2.59547305],       [ 0.        ,  3.41553038],       [ 0.76736534,  4.11447239],       [ 0.        ,  2.19031453],       [ 0.        ,  3.41757137],       [ 1.66912293,  5.09012938],       [ 0.        ,  4.13674653],       [ 0.83226728,  3.7505765 ],       [ 0.        ,  4.58783442],       [ 0.        ,  2.50106168]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   3.46819801e+01],       [  5.47000000e+02,   2.11416454e+01],       [  1.73200000e+03,   3.55394244e+00],       [  5.47700000e+03,   8.34034681e-01],       [  3.16220000e+04,   2.13939026e-01]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   1.36859646e+02],       [  5.47000000e+02,   1.51931515e+01,   2.73726788e+01],       [  1.73200000e+03,   2.40365672e+00,   4.80805683e+00],       [  5.47700000e+03,   4.91547078e-01,   1.25015998e+00],       [  3.16220000e+04,   1.03352018e-01,   3.76697063e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]
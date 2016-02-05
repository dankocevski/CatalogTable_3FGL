Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.48264122,  0.92260712,  1.48835707,  0.84572566,  0.70302677,        0.1054631 ,  0.65917492,  0.40206426,  1.08667946,  0.9797219 ,        0.        ,  1.46824133,  1.03122199,  0.        ,  0.41535917,        0.61008912,  0.56349003,  1.55487132,  1.49749231,  0.71529323,        0.87944525,  1.75407445,  2.28501272,  0.49193317,  0.5860604 ,        0.87456524,  0.9601416 ,  0.16557759,  0.56714267,  0.70728636,        0.86854738,  0.29069537,  0.03003053,  0.13721234,  0.50667036,        0.75345373,  1.62115729,  0.        ,  0.37806377,  0.7684707 ,        1.15647507,  0.        ,  0.3974773 ,  0.22309223,  1.69456482,        0.37842941,  1.12252975,  0.        ]
FluxHistoryError = [[ 0.09163958,  1.04980397],       [ 0.34661984,  1.66732299],       [ 0.79045343,  2.30015492],       [ 0.27347523,  1.6301136 ],       [ 0.19314045,  1.37947655],       [ 0.        ,  1.35613699],       [ 0.07937282,  1.4038856 ],       [ 0.        ,  1.94005197],       [ 0.49412006,  1.84584355],       [ 0.448879  ,  1.66396058],       [ 0.        ,  1.4664495 ],       [ 0.90645415,  2.1478138 ],       [ 0.46493816,  1.76614463],       [ 0.        ,  1.03938019],       [ 0.02576268,  1.00656748],       [ 0.1146183 ,  1.3039186 ],       [ 0.        ,  2.44760036],       [ 0.79141551,  2.46140528],       [ 0.80870676,  2.37729883],       [ 0.22132805,  1.37969577],       [ 0.2725994 ,  1.70108938],       [ 0.9447906 ,  2.7122705 ],       [ 1.38864982,  3.30698967],       [ 0.        ,  2.09538692],       [ 0.16104317,  1.18393219],       [ 0.24954414,  1.70941663],       [ 0.35452807,  1.73812985],       [ 0.        ,  1.98773497],       [ 0.04562473,  1.2877382 ],       [ 0.11925626,  1.43774009],       [ 0.01710606,  1.89159393],       [ 0.        ,  2.0087449 ],       [ 0.        ,  2.10987858],       [ 0.        ,  1.61693078],       [ 0.        ,  2.15799797],       [ 0.26826251,  1.39821339],       [ 0.76788753,  2.65464067],       [ 0.        ,  1.70537627],       [ 0.        ,  2.06498703],       [ 0.        ,  2.77909964],       [ 0.45582223,  2.0012908 ],       [ 0.        ,  1.62215769],       [ 0.        ,  1.73482934],       [ 0.        ,  1.63532999],       [ 1.01197612,  2.52084374],       [ 0.        ,  1.74440515],       [ 0.33202672,  2.08242345],       [ 0.        ,  1.51433289]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   3.24726291e-02],       [  5.47000000e+02,   1.63985672e+01],       [  1.73200000e+03,   5.44505358e+00],       [  5.47700000e+03,   1.41415226e+00],       [  3.16220000e+04,   9.08581540e-02]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   4.32009525e+01],       [  5.47000000e+02,   1.26529455e+01,   2.03035679e+01],       [  1.73200000e+03,   4.53163195e+00,   6.43005133e+00],       [  5.47700000e+03,   1.02898693e+00,   1.85811090e+00],       [  3.16220000e+04,   2.48418376e-02,   2.10159928e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]
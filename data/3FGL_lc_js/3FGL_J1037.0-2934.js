Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [  0.        ,   1.62231576,   0.        ,   1.56532121,         0.        ,   2.88404012,   0.79195309,   1.17863166,         1.52719259,   0.25523216,   0.        ,   2.22562027,         3.50792789,   0.        ,   0.        ,   0.        ,         0.        ,   4.38354063,  10.12046909,   3.81776142,         5.31708479,   3.41099548,   0.95344597,   4.97742367,         3.97533035,   4.89848089,   0.        ,   0.        ,         3.15041614,   2.02522635,   0.        ,   2.35001302,         0.        ,   0.        ,   2.50243664,   0.        ,         0.2320576 ,   0.57501131,   2.28212643,   2.60334945,         0.81102574,   0.        ,   2.87237763,   2.7430768 ,         0.        ,   1.86145306,   1.19249368,   0.        ]
FluxHistoryError = [[  0.        ,   3.69720602],       [  0.31198168,   3.18925667],       [  0.        ,   3.05675673],       [  0.22119069,   3.14774609],       [  0.        ,   2.90184212],       [  0.96266413,   5.00778246],       [  0.        ,   3.36815715],       [  0.        ,   5.41752136],       [  0.17127264,   3.09987402],       [  0.        ,   3.25750786],       [  0.        ,   3.55818462],       [  0.96643507,   3.72330379],       [  1.81116343,   5.35791206],       [  0.        ,   2.31475997],       [  0.        ,   4.44183302],       [  0.        ,   1.41141212],       [  0.        ,   3.01842642],       [  2.59592247,   6.44073582],       [  8.0571537 ,  12.32504559],       [  1.79399943,   6.0184803 ],       [  3.67306519,   7.11103916],       [  1.45504153,   5.60865593],       [  0.        ,   3.79901296],       [  2.98667884,   7.26582241],       [  2.44284916,   5.71250916],       [  2.959548  ,   7.04222393],       [  0.        ,   3.55045748],       [  0.        ,   2.60085845],       [  1.5208348 ,   4.97587013],       [  0.96214068,   3.22173977],       [  0.        ,   3.96168852],       [  0.88343275,   4.02978134],       [  0.        ,   3.6152842 ],       [  0.        ,   2.82762289],       [  1.27414453,   3.88404083],       [  0.        ,   3.82173371],       [  0.        ,   2.84975293],       [  0.        ,   4.20074755],       [  0.83219218,   3.94939041],       [  0.9740442 ,   4.38968849],       [  0.        ,   3.70868981],       [  0.        ,   2.43938041],       [  0.93458402,   5.0986824 ],       [  1.47751272,   4.20809269],       [  0.        ,   2.67778182],       [  0.56022179,   3.42130804],       [  0.        ,   4.11445355],       [  0.        ,   3.75690341]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   8.61185608e+01],       [  5.47000000e+02,   3.05397453e+01],       [  1.73200000e+03,   4.19009447e+00],       [  5.47700000e+03,   9.13120270e-01],       [  3.16220000e+04,   4.87562647e-05]]
SpectrumError = [[  1.73000000e+02,   3.95182838e+01,   1.34091736e+02],       [  5.47000000e+02,   2.46015377e+01,   3.66581993e+01],       [  1.73200000e+03,   3.12074423e+00,   5.34847021e+00],       [  5.47700000e+03,   5.76412559e-01,   1.31645346e+00],       [  3.16220000e+04,   0.00000000e+00,   3.16957473e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]
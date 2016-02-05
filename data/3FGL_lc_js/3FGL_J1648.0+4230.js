Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.56608874,  0.10012235,  0.        ,  0.88038015,        1.34677589,  1.4504776 ,  0.        ,  0.        ,  0.13711444,        0.        ,  0.        ,  0.51937759,  3.28599763,  2.40317464,        2.98965979,  1.5518738 ,  0.59132075,  0.93339229,  0.        ,        0.4128437 ,  0.        ,  0.        ,  1.17874157,  0.74923891,        0.95223969,  0.        ,  0.        ,  0.        ,  0.        ,        1.61752093,  0.84974635,  1.31342781,  1.77447426,  1.72008252,        0.        ,  0.57193238,  0.        ,  0.        ,  0.43832588,        0.51445681,  1.11399615,  0.79765761,  0.96926218,  1.06760705,        3.41100121,  1.05949974,  0.        ]
FluxHistoryError = [[ 0.        ,  2.2144568 ],       [ 0.        ,  3.25308949],       [ 0.        ,  2.07049289],       [ 0.        ,  2.04575396],       [ 0.09837794,  1.98622191],       [ 0.02189565,  2.77327394],       [ 0.50621897,  2.65481639],       [ 0.        ,  1.57444263],       [ 0.        ,  1.54839611],       [ 0.        ,  2.71120206],       [ 0.        ,  1.59295106],       [ 0.        ,  2.21069431],       [ 0.        ,  2.54818523],       [ 2.09041023,  4.6356411 ],       [ 1.21739173,  3.76523209],       [ 1.71215701,  4.38711357],       [ 0.39471591,  2.93936706],       [ 0.        ,  2.79827881],       [ 0.        ,  2.06438541],       [ 0.        ,  1.84847927],       [ 0.        ,  2.09896576],       [ 0.        ,  1.9213891 ],       [ 0.        ,  2.07379723],       [ 0.        ,  3.94855487],       [ 0.        ,  3.12098521],       [ 0.        ,  3.73651665],       [ 0.        ,  2.36327314],       [ 0.        ,  2.11606479],       [ 0.        ,  2.52717423],       [ 0.        ,  1.62003934],       [ 0.61900306,  2.89557624],       [ 0.20720857,  1.73921943],       [ 0.47710526,  2.45000982],       [ 0.61901391,  3.06113958],       [ 0.71833849,  2.91447043],       [ 0.        ,  1.71304309],       [ 0.        ,  3.10660273],       [ 0.        ,  2.29497194],       [ 0.        ,  1.11808419],       [ 0.        ,  2.55838585],       [ 0.        ,  2.71106035],       [ 0.01293373,  2.4073019 ],       [ 0.        ,  3.40097368],       [ 0.        ,  3.18710119],       [ 0.06469643,  2.26111126],       [ 2.24953794,  4.71169376],       [ 0.        ,  3.55705261],       [ 0.        ,  1.60450351]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   4.11223068e+01],       [  5.47000000e+02,   1.34070377e+01],       [  1.73200000e+03,   1.41195178e+00],       [  5.47700000e+03,   3.76063466e-01],       [  3.16220000e+04,   5.57816122e-04]]
SpectrumError = [[  1.73000000e+02,   1.00616894e+01,   7.24801636e+01],       [  5.47000000e+02,   9.42552567e+00,   1.76164188e+01],       [  1.73200000e+03,   8.10102344e-01,   2.13182878e+00],       [  5.47700000e+03,   1.61258876e-01,   6.47339225e-01],       [  3.16220000e+04,   0.00000000e+00,   2.79536194e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]
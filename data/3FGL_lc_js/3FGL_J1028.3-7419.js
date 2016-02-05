Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 1.77210331,  0.88774955,  0.        ,  1.97452188,  0.        ,        0.        ,  4.52550411,  1.51124251,  4.26235628,  1.71802843,        3.26013064,  0.        ,  0.        ,  1.70816767,  2.42699122,        0.        ,  1.29109704,  2.4081974 ,  2.03778529,  3.19026756,        0.12145551,  0.        ,  0.        ,  1.05144   ,  1.98555696,        0.69726664,  2.37874794,  0.        ,  0.194086  ,  0.        ,        2.65435481,  1.49168289,  0.58669341,  1.94909549,  3.29545999,        0.        ,  0.        ,  0.        ,  1.5082469 ,  0.        ,        0.5911904 ,  3.41957569,  0.        ,  1.24581456,  0.40156442,        0.19794926,  3.45989704,  0.5995115 ]
FluxHistoryError = [[ 0.        ,  6.74083138],       [ 0.        ,  5.72015798],       [ 0.        ,  4.79265165],       [ 0.        ,  6.21219897],       [ 0.        ,  3.85154271],       [ 0.        ,  3.00899959],       [ 2.12179852,  7.1077776 ],       [ 0.        ,  5.92712986],       [ 1.77578425,  6.93420601],       [ 0.        ,  5.99667394],       [ 1.15698028,  5.59609413],       [ 0.        ,  3.66683745],       [ 0.        ,  3.58907247],       [ 0.12313688,  3.52008772],       [ 0.45761406,  4.52627993],       [ 0.        ,  3.68791723],       [ 0.        ,  4.87756622],       [ 0.91239297,  4.05541611],       [ 0.42059374,  3.83547282],       [ 1.45989013,  5.10494709],       [ 0.        ,  3.67885336],       [ 0.        ,  3.44755983],       [ 0.        ,  3.53343415],       [ 0.        ,  4.90099859],       [ 0.31101632,  3.83042383],       [ 0.        ,  4.92471081],       [ 0.65613794,  4.40598583],       [ 0.        ,  2.20314026],       [ 0.        ,  3.88375156],       [ 0.        ,  2.80711389],       [ 0.9866128 ,  4.50943947],       [ 0.        ,  5.36364377],       [ 0.        ,  4.89973652],       [ 0.14850783,  3.85719919],       [ 1.79643226,  4.96154022],       [ 0.        ,  3.13054824],       [ 0.        ,  3.18508291],       [ 0.        ,  3.62503099],       [ 0.        ,  4.75989556],       [ 0.        ,  3.24412274],       [ 0.        ,  4.52061039],       [ 1.60612404,  5.34357929],       [ 0.        ,  2.87599993],       [ 0.        ,  5.23910284],       [ 0.        ,  4.02636486],       [ 0.        ,  3.54138264],       [ 1.62603772,  5.42272377],       [ 0.        ,  4.55427969]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   9.15417480e+01],       [  5.47000000e+02,   1.96808109e+01],       [  1.73200000e+03,   2.08672881e+00],       [  5.47700000e+03,   5.69276333e-01],       [  3.16220000e+04,   2.13492793e-04]]
SpectrumError = [[  1.73000000e+02,   5.52514076e+01,   1.27941681e+02],       [  5.47000000e+02,   1.34115047e+01,   2.60709305e+01],       [  1.73200000e+03,   9.80141401e-01,   3.29817390e+00],       [  5.47700000e+03,   2.77745277e-01,   9.29860890e-01],       [  3.16220000e+04,   0.00000000e+00,   3.36781670e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]
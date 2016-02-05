Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 1.21921504,  0.        ,  0.99995375,  7.50068951,  3.40639687,        0.24531801,  2.67150545,  0.1760637 ,  1.17046237,  1.34760416,        0.        ,  0.43294775,  2.13157368,  1.18410015,  1.18271232,        0.        ,  0.        ,  1.84821141,  0.55658978,  1.85312533,        0.        ,  2.06323242,  0.        ,  1.46518826,  0.24195935,        0.        ,  0.        ,  0.        ,  0.        ,  0.        ,        2.13112545,  0.        ,  2.30059075,  0.90653193,  0.59895104,        1.9485569 ,  1.33116496,  0.        ,  1.34716129,  0.        ,        0.        ,  0.08238953,  0.        ,  1.32256532,  0.35722804,        0.39174622,  1.04920399,  0.        ]
FluxHistoryError = [[ 0.        ,  4.63269508],       [ 0.        ,  3.07627416],       [ 0.        ,  3.497931  ],       [ 5.72360325,  9.42195606],       [ 2.02528691,  4.99159384],       [ 0.        ,  2.47607882],       [ 1.57401001,  3.94514275],       [ 0.        ,  2.46994011],       [ 0.19026637,  2.41367698],       [ 0.51113176,  2.49529767],       [ 0.        ,  1.62330031],       [ 0.        ,  2.44186437],       [ 0.54864347,  3.91325521],       [ 0.        ,  5.27553368],       [ 0.22640234,  2.57739425],       [ 0.        ,  3.59184361],       [ 0.        ,  4.09623146],       [ 0.63571787,  3.62320876],       [ 0.        ,  3.62553686],       [ 0.49226129,  3.76344013],       [ 0.        ,  3.19618988],       [ 0.26415229,  4.16011238],       [ 0.        ,  2.34060955],       [ 0.        ,  5.15023875],       [ 0.        ,  4.29506518],       [ 0.        ,  2.95598865],       [ 0.        ,  3.54360318],       [ 0.        ,  2.55549526],       [ 0.        ,  5.12975407],       [ 0.        ,  2.8492825 ],       [ 0.89584446,  3.71527123],       [ 0.        ,  2.9523375 ],       [ 1.06412983,  3.80299807],       [ 0.20347267,  1.93484998],       [ 0.        ,  3.57429808],       [ 0.83016455,  3.28276491],       [ 0.45744944,  2.53423738],       [ 0.        ,  2.44124746],       [ 0.3185457 ,  2.64966941],       [ 0.        ,  1.53224897],       [ 0.        ,  2.3006413 ],       [ 0.        ,  2.7793588 ],       [ 0.        ,  2.49647903],       [ 0.49264944,  2.43703103],       [ 0.        ,  1.96187437],       [ 0.        ,  2.76982683],       [ 0.41894692,  1.91671371],       [ 0.        ,  2.05883455]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   9.16034851e+01],       [  5.47000000e+02,   1.65510368e+01],       [  1.73200000e+03,   2.08583570e+00],       [  5.47700000e+03,   5.86509109e-01],       [  3.16220000e+04,   3.93963218e-01]]
SpectrumError = [[  1.73000000e+02,   2.50541000e+01,   1.59538239e+02],       [  5.47000000e+02,   8.88272285e+00,   2.44917927e+01],       [  1.73200000e+03,   1.08655262e+00,   3.14685583e+00],       [  5.47700000e+03,   3.39172184e-01,   8.97358000e-01],       [  3.16220000e+04,   2.21668616e-01,   6.20915413e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]
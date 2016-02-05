Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 18.72618866,  30.91054535,  26.83847237,  26.12479782,        27.16467667,  35.40568542,  19.41849327,  36.12641907,        28.15435028,  24.19681358,  28.16098785,  32.76942825,        17.01973152,  30.87550735,  30.77940369,  19.4356842 ,        28.32401848,  22.42448235,  23.55744743,  33.34076309,        22.23889923,  24.45062256,  28.10772705,  31.9338932 ,        26.70503807,  30.32616234,  28.88537788,  34.81052399,        43.26403809,  19.10083199,  28.10871887,  22.99034119,        25.23787308,  28.37655258,  23.41795349,  42.97353745,        30.56735229,  17.67150116,  35.77894592,  27.84594536,        36.37910461,  33.48765564,  24.34323883,  45.43622589,        30.98574066,  14.52200317,  18.97550583,  39.72899628]
FluxHistoryError = [[ 13.26641083,  24.4372654 ],       [ 24.91197968,  36.90705109],       [ 21.47284317,  32.39066315],       [ 20.35942268,  32.23413086],       [ 21.6089592 ,  32.99242401],       [ 29.30965805,  41.81805801],       [ 13.94781113,  25.22418976],       [ 29.89715004,  42.6487999 ],       [ 22.40691376,  34.19519043],       [ 18.93753815,  29.66143227],       [ 21.98675537,  34.56752777],       [ 26.98774529,  38.72801971],       [ 11.72286415,  22.63940811],       [ 24.96212578,  37.026474  ],       [ 24.57046318,  37.28344727],       [ 12.37247658,  26.89926147],       [ 22.91854477,  33.95992279],       [ 15.46136856,  29.90494919],       [ 18.33863449,  29.02118683],       [ 26.53190231,  40.45206833],       [ 16.52096748,  28.3127861 ],       [ 18.95047379,  30.21261787],       [ 20.76865387,  35.79795456],       [ 26.48717499,  37.62878799],       [ 20.39098167,  33.41252899],       [ 24.33398438,  36.56789017],       [ 21.67977142,  36.34290695],       [ 29.90499496,  39.88953781],       [ 37.43824005,  49.33227921],       [ 12.9365387 ,  25.65958595],       [ 22.67981529,  33.74403381],       [ 16.13079643,  30.35103607],       [ 19.67700195,  31.03264809],       [ 21.96413803,  35.14744186],       [ 17.55513382,  29.52556419],       [ 36.6540947 ,  49.53657532],       [ 24.05055237,  37.43159485],       [ 12.54421329,  23.05814171],       [ 28.18974876,  43.78553391],       [ 22.54897118,  33.34731293],       [ 29.23074913,  43.84871292],       [ 27.55493546,  39.57492828],       [ 18.91948128,  30.0752964 ],       [ 38.05095673,  53.0864296 ],       [ 25.6175499 ,  36.58965302],       [  7.94240713,  21.60509491],       [ 13.72569275,  24.46037102],       [ 32.63890457,  46.97261429]], dtype=float32
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   6.04510864e+02],       [  5.47000000e+02,   8.40599976e+02],       [  1.73200000e+03,   1.79840393e+02],       [  5.47700000e+03,   2.87982540e+01],       [  3.16220000e+04,   1.40064335e+00]]
SpectrumError = [[  1.73000000e+02,   4.25161743e+01,   1.16162939e+03],       [  5.47000000e+02,   7.85512939e+02,   8.95687012e+02],       [  1.73200000e+03,   1.71008804e+02,   1.88671982e+02],       [  5.47700000e+03,   2.65236626e+01,   3.10728455e+01],       [  3.16220000e+04,   9.50110435e-01,   1.93544209e+00]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]
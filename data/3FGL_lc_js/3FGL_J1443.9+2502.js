Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.81282687,  1.18492115,  1.50847566,  0.        ,  1.14802718,        1.25296104,  0.45245123,  1.45179367,  1.36944735,  1.70430267,        1.10816431,  0.51746058,  1.59392715,  0.64734238,  1.58636308,        2.12859821,  0.56265008,  1.09339476,  2.71192527,  1.77015805,        0.        ,  0.63372141,  0.66053003,  2.77091646,  1.20375919,        0.615767  ,  0.46882391,  0.58375394,  0.        ,  0.5000881 ,        1.85925424,  1.48826849,  1.11019206,  0.77765119,  2.78652573,        0.45414209,  1.31553769,  0.        ,  1.54629111,  1.663679  ,        2.06839991,  1.97589374,  1.89439809,  2.14613366,  3.45186853,        0.14628039,  1.47335827,  3.1374402 ]
FluxHistoryError = [[ 0.06606662,  1.7185328 ],       [ 0.4808054 ,  2.046242  ],       [ 0.90288329,  2.23275137],       [ 0.        ,  1.84254146],       [ 0.44600481,  1.98667526],       [ 0.70988524,  1.94993258],       [ 0.        ,  2.19166267],       [ 0.72590047,  2.35336304],       [ 0.64818984,  2.24220514],       [ 0.96463597,  2.59154773],       [ 0.52295709,  1.87162375],       [ 0.08350047,  1.13927567],       [ 0.77576917,  2.55184007],       [ 0.        ,  2.75896353],       [ 0.72176933,  2.62568045],       [ 1.18002701,  3.28569055],       [ 0.        ,  2.24278486],       [ 0.48694688,  1.89883542],       [ 1.67216432,  3.92464638],       [ 1.05320358,  2.62050176],       [ 0.        ,  2.19445205],       [ 0.        ,  2.44931227],       [ 0.        ,  2.6640467 ],       [ 1.82561803,  3.85794163],       [ 0.57849884,  1.97811508],       [ 0.        ,  2.63101864],       [ 0.        ,  2.0728029 ],       [ 0.15155363,  1.29255342],       [ 0.        ,  1.51900339],       [ 0.        ,  2.07669258],       [ 1.05539727,  2.85276413],       [ 0.59954178,  2.5813756 ],       [ 0.474222  ,  1.99664998],       [ 0.08216172,  1.62337458],       [ 1.79101956,  3.91508341],       [ 0.        ,  2.37535858],       [ 0.19285405,  2.5776403 ],       [ 0.        ,  1.28232229],       [ 0.77612889,  2.507056  ],       [ 0.90675354,  2.58448505],       [ 1.28280973,  2.97567034],       [ 1.12571549,  2.98051834],       [ 1.00121379,  2.92838073],       [ 1.33115053,  3.10317779],       [ 2.41466427,  4.64310265],       [ 0.        ,  1.82150958],       [ 0.68392575,  2.45635629],       [ 2.10431194,  4.30577946]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   9.13037567e+01],       [  5.47000000e+02,   2.97470360e+01],       [  1.73200000e+03,   5.43196726e+00],       [  5.47700000e+03,   2.84295630e+00],       [  3.16220000e+04,   3.89217049e-01]]
SpectrumError = [[  1.73000000e+02,   6.37279129e+01,   1.19440430e+02],       [  5.47000000e+02,   2.51746902e+01,   3.44541893e+01],       [  1.73200000e+03,   4.42213249e+00,   6.51816082e+00],       [  5.47700000e+03,   2.35791898e+00,   3.38026333e+00],       [  3.16220000e+04,   2.14954332e-01,   6.13384128e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]
Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.76057833,  0.56121063,  0.84917605,  1.25444317,  1.97125602,        2.76352644,  1.68024349,  0.68382233,  1.49917364,  1.31874859,        2.35494542,  1.104563  ,  0.80128998,  0.48746425,  0.45712212,        1.19632435,  0.94934303,  1.01793694,  0.        ,  1.81678176,        2.04052162,  2.0117507 ,  2.8356216 ,  0.71989763,  1.66000032,        1.3932215 ,  1.57781553,  1.34313869,  2.76731491,  0.88864952,        3.51928663,  2.86573219,  1.05149865,  1.30181789,  1.79038739,        0.43816996,  1.25428295,  2.24242711,  2.77752733,  2.03559756,        1.08962381,  1.94870687,  1.78671563,  1.98928285,  2.09502554,        3.30770779,  2.23396945,  2.07722855]
FluxHistoryError = [[ 0.33234787,  1.32414174],       [ 0.24173012,  1.00447464],       [ 0.49704105,  1.32253885],       [ 0.77373505,  1.84068012],       [ 1.44851732,  2.58217812],       [ 2.04015541,  3.60082245],       [ 1.1751343 ,  2.26837587],       [ 0.31280401,  1.23311365],       [ 0.98456496,  2.10928249],       [ 0.84227043,  1.88782167],       [ 1.77943504,  3.02662373],       [ 0.66021979,  1.62305355],       [ 0.4433369 ,  1.27260542],       [ 0.20973402,  0.8887161 ],       [ 0.13012585,  0.92124152],       [ 0.68597233,  1.83519864],       [ 0.51414859,  1.51651561],       [ 0.59930968,  1.54572725],       [ 0.        ,  0.72723532],       [ 1.19398928,  2.55078268],       [ 1.36305022,  2.84576678],       [ 1.46104527,  2.65377784],       [ 2.14975142,  3.60732889],       [ 0.39165556,  1.16356575],       [ 1.09111667,  2.34856486],       [ 0.87162453,  2.04594064],       [ 1.01848817,  2.25188446],       [ 0.80798382,  2.01737261],       [ 2.05812359,  3.5665288 ],       [ 0.47035688,  1.43776059],       [ 2.74233341,  4.39874029],       [ 2.12230921,  3.72347903],       [ 0.42829317,  1.86165571],       [ 0.82658732,  1.89591944],       [ 1.21157503,  2.48197889],       [ 0.16808948,  0.83126915],       [ 0.77454627,  1.85287666],       [ 1.58787167,  3.01433611],       [ 2.09553146,  3.55234981],       [ 1.50579524,  2.65003204],       [ 0.65853709,  1.62160194],       [ 1.35052609,  2.66571808],       [ 1.26885843,  2.41100597],       [ 1.38867807,  2.70543051],       [ 1.53344822,  2.780159  ],       [ 2.54087067,  4.18055153],       [ 1.60780287,  2.97750998],       [ 1.45588386,  2.79440141]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   9.22752619e-01],       [  5.47000000e+02,   4.06887970e+01],       [  1.73200000e+03,   1.64433727e+01],       [  5.47700000e+03,   1.01806011e+01],       [  3.16220000e+04,   5.82427216e+00]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   1.00264702e+02],       [  5.47000000e+02,   3.36811829e+01,   4.80927010e+01],       [  1.73200000e+03,   1.47482519e+01,   1.82219124e+01],       [  5.47700000e+03,   9.23741055e+00,   1.11237917e+01],       [  3.16220000e+04,   5.18110752e+00,   6.51517630e+00]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]
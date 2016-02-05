Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  1.21917975,  0.        ,  2.27896237,  1.14769578,        0.        ,  0.        ,  1.07859683,  0.3382358 ,  1.32827806,        0.        ,  1.03901756,  0.        ,  0.        ,  1.19143593,        0.1000252 ,  0.        ,  0.        ,  1.15695643,  1.171489  ,        0.        ,  0.09943859,  0.        ,  0.6611706 ,  0.        ,        1.41749001,  2.53589416,  1.23955214,  1.69515562,  1.65525758,        1.38243985,  0.        ,  0.        ,  0.        ,  0.88740313,        0.71988356,  0.69937587,  0.87789893,  0.        ,  1.20007336,        0.        ,  0.        ,  0.31750503,  0.        ,  0.        ,        0.        ,  0.75273955,  1.09256768]
FluxHistoryError = [[ 0.        ,  1.79816306],       [ 0.31404519,  2.36659384],       [ 0.        ,  1.98562515],       [ 1.21675932,  3.56262636],       [ 0.1751104 ,  2.33079052],       [ 0.        ,  1.47386432],       [ 0.        ,  2.07306361],       [ 0.        ,  4.06706715],       [ 0.        ,  2.59547848],       [ 0.2772243 ,  2.60774088],       [ 0.        ,  2.03720093],       [ 0.33572078,  1.98854089],       [ 0.        ,  1.83632791],       [ 0.        ,  1.8708123 ],       [ 0.        ,  4.16920197],       [ 0.        ,  1.79364374],       [ 0.        ,  1.55579901],       [ 0.        ,  3.01545811],       [ 0.41738653,  2.05767107],       [ 0.21153349,  2.46092796],       [ 0.        ,  1.84214401],       [ 0.        ,  2.41553657],       [ 0.        ,  1.19799685],       [ 0.        ,  2.78604949],       [ 0.        ,  2.85389376],       [ 0.3447684 ,  2.66083431],       [ 1.24303532,  4.08447981],       [ 0.40905434,  2.23176527],       [ 0.87221867,  2.78615117],       [ 0.70191252,  2.71366549],       [ 0.39863598,  2.55967999],       [ 0.        ,  1.7671417 ],       [ 0.        ,  1.95217478],       [ 0.        ,  3.2167573 ],       [ 0.20316416,  1.78363109],       [ 0.        ,  3.033373  ],       [ 0.        ,  2.86782932],       [ 0.30581546,  1.76826072],       [ 0.        ,  1.48319745],       [ 0.46464133,  2.205163  ],       [ 0.        ,  1.66839552],       [ 0.        ,  1.35524344],       [ 0.        ,  3.53289858],       [ 0.        ,  2.20999289],       [ 0.        ,  2.29030657],       [ 0.        ,  2.5321753 ],       [ 0.09065181,  1.58954978],       [ 0.07223833,  2.42516899]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   6.74474030e+01],       [  5.47000000e+02,   1.04375143e+01],       [  1.73200000e+03,   1.07776237e+00],       [  5.47700000e+03,   5.67980468e-01],       [  3.16220000e+04,   4.11399871e-01]]
SpectrumError = [[  1.73000000e+02,   2.91562538e+01,   1.06458298e+02],       [  5.47000000e+02,   5.30506039e+00,   1.57928171e+01],       [  1.73200000e+03,   1.38605893e-01,   2.10941410e+00],       [  5.47700000e+03,   2.76345998e-01,   9.39773202e-01],       [  3.16220000e+04,   2.40753591e-01,   6.41721845e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]
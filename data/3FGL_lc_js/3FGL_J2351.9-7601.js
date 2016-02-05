Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.19769832,  0.        ,  0.        ,  0.2571072 ,        0.10103986,  0.17354678,  0.        ,  0.66058987,  0.43439695,        0.22161987,  0.        ,  0.10578546,  0.32141507,  0.16955423,        0.60838044,  0.30268309,  0.08140446,  0.48927599,  0.19501974,        0.46133897,  0.        ,  0.11488267,  0.40698889,  0.27362534,        0.        ,  0.        ,  0.0460481 ,  0.        ,  0.        ,        0.        ,  0.        ,  0.        ,  0.        ,  0.        ,        0.27609378,  0.13081677,  0.0900381 ,  0.        ,  0.54057771,        0.        ,  0.52701783,  0.25467101,  0.        ,  0.16601421,        0.        ,  0.        ,  0.        ]
FluxHistoryError = [[ 0.        ,  0.68740505],       [ 0.01609872,  0.51749182],       [ 0.        ,  0.73175812],       [ 0.        ,  0.76658368],       [ 0.        ,  1.22231287],       [ 0.        ,  0.95185289],       [ 0.        ,  1.22118746],       [ 0.        ,  1.07004416],       [ 0.2263571 ,  1.21847606],       [ 0.17736968,  0.80926144],       [ 0.03018214,  0.51906252],       [ 0.        ,  0.80769026],       [ 0.        ,  0.91794798],       [ 0.08141933,  0.67483318],       [ 0.        ,  0.86198568],       [ 0.26012719,  1.07766867],       [ 0.08473143,  0.6350565 ],       [ 0.        ,  0.65700109],       [ 0.19262585,  0.88835001],       [ 0.06397237,  0.41891316],       [ 0.14408654,  0.93053222],       [ 0.        ,  0.69717932],       [ 0.        ,  0.78164943],       [ 0.13627571,  0.76918191],       [ 0.09486663,  0.5508275 ],       [ 0.        ,  0.70688933],       [ 0.        ,  0.62085539],       [ 0.        ,  0.97676014],       [ 0.        ,  0.55950922],       [ 0.        ,  0.64997345],       [ 0.        ,  0.44430509],       [ 0.        ,  0.65425134],       [ 0.        ,  0.86545622],       [ 0.        ,  0.93536115],       [ 0.        ,  0.63850629],       [ 0.10645486,  0.55092931],       [ 0.        ,  0.84757979],       [ 0.        ,  0.91324852],       [ 0.        ,  0.53172064],       [ 0.19774789,  0.98511565],       [ 0.        ,  0.62508506],       [ 0.26656705,  0.89404148],       [ 0.00150278,  0.6021238 ],       [ 0.        ,  0.59617662],       [ 0.04922205,  0.38513577],       [ 0.        ,  0.77285528],       [ 0.        ,  0.53840548],       [ 0.        ,  0.5366472 ]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.70001507e+01],       [  5.47000000e+02,   1.18555938e-04],       [  1.73200000e+03,   1.61921740e+00],       [  5.47700000e+03,   9.22016561e-01],       [  3.16220000e+04,   3.52966756e-01]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   8.14141521e+01],       [  5.47000000e+02,   0.00000000e+00,   5.73002321e+00],       [  1.73200000e+03,   9.24336851e-01,   2.39679456e+00],       [  5.47700000e+03,   6.10628068e-01,   1.28899992e+00],       [  3.16220000e+04,   1.89749151e-01,   5.68749547e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]
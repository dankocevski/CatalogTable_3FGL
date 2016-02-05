Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 1.13104379,  1.06578171,  0.35023984,  0.        ,  1.13508344,        1.94733703,  0.        ,  0.        ,  1.5773958 ,  0.        ,        0.        ,  1.06176007,  1.02589035,  1.67160225,  6.91194725,        1.22295916,  1.47518659,  4.02278757,  3.64962244,  2.35801768,        0.96250659,  0.        ,  0.        ,  4.27126551,  4.18690538,        2.93347549,  0.        ,  3.8044672 ,  1.43634367,  2.08005643,        0.        ,  0.47932306,  2.10292435,  0.        ,  2.79476881,        0.24364205,  0.        ,  3.58218479,  2.02716184,  1.19554567,        0.        ,  1.72708499,  1.301054  ,  0.        ,  0.        ,        0.        ,  0.        ,  0.        ]
FluxHistoryError = [[ 0.        ,  4.43115675],       [ 0.        ,  4.69382036],       [ 0.        ,  4.99671993],       [ 0.        ,  1.86649454],       [ 0.20579863,  2.52715158],       [ 0.46060359,  3.90516996],       [ 0.        ,  2.69001603],       [ 0.        ,  2.98815084],       [ 0.33051693,  3.22134089],       [ 0.        ,  2.46232653],       [ 0.        ,  2.45137334],       [ 0.2610234 ,  2.11574602],       [ 0.        ,  4.36801648],       [ 0.        ,  6.34187412],       [ 4.2002306 ,  9.98906898],       [ 0.        ,  6.07751811],       [ 0.34766924,  3.01198769],       [ 1.6205256 ,  6.80600643],       [ 1.73545492,  5.95089531],       [ 0.74847937,  4.5614233 ],       [ 0.        ,  4.49565583],       [ 0.        ,  3.70641041],       [ 0.        ,  2.44647408],       [ 2.35732698,  6.47189951],       [ 2.39828539,  6.28846836],       [ 0.02679515,  6.56937695],       [ 0.        ,  6.00806952],       [ 1.92173982,  6.11846447],       [ 0.        ,  6.2157836 ],       [ 0.56707025,  3.89426041],       [ 0.        ,  2.4430325 ],       [ 0.        ,  3.15038529],       [ 0.93531036,  3.4955802 ],       [ 0.        ,  5.16025448],       [ 1.53150117,  4.28443193],       [ 0.        ,  3.5407228 ],       [ 0.        ,  3.24749231],       [ 1.62575066,  5.53497887],       [ 0.5713973 ,  3.84066534],       [ 0.28825402,  2.60283566],       [ 0.        ,  2.43194151],       [ 0.7045778 ,  2.92004013],       [ 0.32272726,  2.62901258],       [ 0.        ,  2.31578159],       [ 0.        ,  2.64638638],       [ 0.        ,  2.42571235],       [ 0.        ,  2.81387758],       [ 0.        ,  4.53383875]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   5.03713112e+01],       [  5.47000000e+02,   1.60052834e+01],       [  1.73200000e+03,   3.81196404e+00],       [  5.47700000e+03,   1.17955935e+00],       [  3.16220000e+04,   1.81737259e-01]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   1.81950047e+02],       [  5.47000000e+02,   8.33759689e+00,   2.40382423e+01],       [  1.73200000e+03,   2.59335947e+00,   5.14440155e+00],       [  5.47700000e+03,   8.08286190e-01,   1.61013913e+00],       [  3.16220000e+04,   5.19511849e-02,   3.76410723e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]
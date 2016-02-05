Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [  5.30440569,   6.4373827 ,   0.        ,   1.07777286,         0.        ,   3.56043339,   7.94906664,   0.        ,         1.6181705 ,   1.99541628,   0.89412862,   0.        ,         0.        ,   0.        ,   0.        ,   1.0672307 ,         2.02927399,   0.        ,   0.        ,   8.22790337,        10.94268894,   0.        ,   5.45286465,   2.59350419,         0.29595092,   2.59666181,   3.38288379,   0.80023724,         0.        ,   0.        ,   1.5742346 ,   1.99806321,         2.95878267,   1.26876938,   0.        ,   0.        ,         0.        ,   0.        ,   2.51846743,   0.18969195,         4.2966795 ,   3.53645682,   2.83152962,   7.57098007,         3.49098563,   0.        ,   0.        ,   0.        ]
FluxHistoryError = [[  3.34798908,   7.33481216],       [  3.90781236,   8.93092823],       [  0.        ,   2.71082115],       [  0.        ,   3.86676121],       [  0.        ,   3.66345167],       [  1.14586091,   6.21366501],       [  5.27340651,  10.17638016],       [  0.        ,   5.4260602 ],       [  0.57788706,   2.88165426],       [  0.65751755,   3.50775909],       [  0.        ,   4.75751644],       [  0.        ,   4.01961327],       [  0.        ,   1.93296599],       [  0.        ,   4.10495329],       [  0.        ,   2.81171846],       [  0.        ,   4.60919213],       [  0.57581151,   3.67486906],       [  0.        ,   3.33829069],       [  0.        ,   3.62385368],       [  5.87874508,  10.52110863],       [  9.26140118,  12.68213844],       [  0.        ,   2.99652362],       [  4.02349472,   6.93175888],       [  1.31058896,   3.96671915],       [  0.        ,   2.57469133],       [  1.2973485 ,   4.04003334],       [  2.27919769,   4.61000729],       [  0.        ,   3.58805305],       [  0.        ,   2.39404988],       [  0.        ,   2.89530253],       [  0.4026103 ,   2.8647387 ],       [  0.1755054 ,   3.91516829],       [  1.00801516,   4.94984627],       [  0.        ,   4.22942507],       [  0.        ,   1.42741191],       [  0.        ,   2.2777667 ],       [  0.        ,   2.37829423],       [  0.        ,   2.02944422],       [  1.2352351 ,   3.8571825 ],       [  0.        ,   2.79953949],       [  2.85727835,   5.77805424],       [  0.99104929,   6.27375603],       [  1.44989061,   4.34433126],       [  5.19301653,   9.60063362],       [  2.20063591,   4.90393353],       [  0.        ,   2.65954614],       [  0.        ,   2.94997501],       [  0.        ,   3.95025516]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   6.51647491e+01],       [  5.47000000e+02,   2.93273296e+01],       [  1.73200000e+03,   2.40823078e+00],       [  5.47700000e+03,   2.38720730e-01],       [  3.16220000e+04,   5.50112200e-05]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   2.32071625e+02],       [  5.47000000e+02,   2.30927391e+01,   3.57035561e+01],       [  1.73200000e+03,   1.70914590e+00,   3.17660141e+00],       [  5.47700000e+03,   1.02466404e-01,   4.18953180e-01],       [  3.16220000e+04,   0.00000000e+00,   1.63011324e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]
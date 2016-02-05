Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 1.81398296,  0.        ,  0.5103845 ,  2.37092471,  1.0921663 ,        1.58825421,  0.7253443 ,  1.11716008,  1.16191161,  0.51581287,        0.        ,  0.        ,  0.        ,  0.81542677,  0.        ,        1.12606239,  0.        ,  0.        ,  0.        ,  0.10361087,        0.        ,  1.28884292,  0.38394484,  2.61931992,  0.        ,        0.67586249,  1.74944961,  0.8897903 ,  0.5807367 ,  1.0747596 ,        0.        ,  0.        ,  1.34903955,  2.94633818,  0.        ,        0.94921422,  0.60574228,  0.        ,  0.        ,  0.        ,        0.26526824,  1.35774672,  0.10160954,  0.81544691,  0.        ,        0.        ,  2.58848047,  1.28575456]
FluxHistoryError = [[ 0.59095705,  3.30128241],       [ 0.        ,  1.63710678],       [ 0.        ,  3.02910513],       [ 1.05725849,  3.81665421],       [ 0.13647139,  2.26055336],       [ 0.39378941,  2.90225887],       [ 0.        ,  3.28173435],       [ 0.17417276,  2.36212873],       [ 0.31034303,  2.19118047],       [ 0.        ,  2.97473264],       [ 0.        ,  1.85660112],       [ 0.        ,  1.60127985],       [ 0.        ,  1.97890055],       [ 0.        ,  3.01015347],       [ 0.        ,  2.72550917],       [ 0.42948318,  2.1021347 ],       [ 0.        ,  2.33861375],       [ 0.        ,  1.41797185],       [ 0.        ,  2.16178107],       [ 0.        ,  3.11359346],       [ 0.        ,  1.15474415],       [ 0.1055423 ,  2.75139618],       [ 0.        ,  2.15571722],       [ 1.30978251,  4.14680767],       [ 0.        ,  2.59914064],       [ 0.        ,  3.33885258],       [ 0.48687994,  3.24946427],       [ 0.17955607,  1.78185034],       [ 0.04046452,  1.54020822],       [ 0.        ,  3.41633832],       [ 0.        ,  1.57164609],       [ 0.        ,  1.95912039],       [ 0.33809185,  2.71522713],       [ 1.64322865,  4.35526085],       [ 0.        ,  1.45986497],       [ 0.        ,  4.30509615],       [ 0.03566694,  1.45055199],       [ 0.        ,  2.15010762],       [ 0.        ,  2.37595129],       [ 0.        ,  1.69919097],       [ 0.        ,  2.95971194],       [ 0.31631243,  2.53488612],       [ 0.        ,  3.26982482],       [ 0.        ,  2.79471511],       [ 0.        ,  2.13580894],       [ 0.        ,  2.10605669],       [ 1.54574633,  3.82650924],       [ 0.40764135,  2.41198444]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   4.70485039e+01],       [  5.47000000e+02,   1.16458044e+01],       [  1.73200000e+03,   1.55394554e+00],       [  5.47700000e+03,   6.44420743e-01],       [  3.16220000e+04,   2.44258329e-01]]
SpectrumError = [[  1.73000000e+02,   1.59587326e+01,   7.88600693e+01],       [  5.47000000e+02,   6.35151291e+00,   1.72080994e+01],       [  1.73200000e+03,   6.37519956e-01,   2.58128834e+00],       [  5.47700000e+03,   3.61483216e-01,   9.98253047e-01],       [  3.16220000e+04,   1.06037602e-01,   4.34136689e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]
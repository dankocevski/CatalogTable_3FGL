Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.51690632,  0.7820555 ,  0.3142339 ,  0.43241814,        0.        ,  0.64228857,  0.30585515,  0.72709554,  0.        ,        0.99582112,  0.8898378 ,  1.80395579,  1.75475347,  0.4022474 ,        1.07358956,  0.4969582 ,  1.69638419,  1.78282654,  1.99241233,        0.63000309,  1.17442739,  2.01997328,  4.78238249,  1.86701679,        1.56929052,  0.24932674,  0.67683959,  0.67085868,  0.        ,        1.06854153,  1.18065751,  1.98701096,  4.20758295,  1.67662752,        2.55394959,  1.0480814 ,  0.        ,  0.80065554,  0.17773251,        0.72100204,  1.75093949,  0.        ,  0.81424129,  0.04229746,        0.        ,  0.        ,  1.03969371]
FluxHistoryError = [[ 0.        ,  1.17093706],       [ 0.16024843,  1.03244269],       [ 0.30170995,  1.38170624],       [ 0.09569678,  0.66491401],       [ 0.        ,  1.66617909],       [ 0.        ,  0.72141784],       [ 0.29016453,  1.12860703],       [ 0.02740076,  0.76019168],       [ 0.21079463,  1.3664304 ],       [ 0.        ,  0.7284714 ],       [ 0.54945862,  1.5744282 ],       [ 0.49835172,  1.38223386],       [ 1.20197463,  2.50637054],       [ 1.05294585,  2.60395861],       [ 0.        ,  1.80911776],       [ 0.56972331,  1.72488356],       [ 0.0864315 ,  1.08661032],       [ 0.99286312,  2.52776432],       [ 1.1108675 ,  2.60056162],       [ 1.30334902,  2.81242895],       [ 0.20243725,  1.20663619],       [ 0.65573061,  1.82579637],       [ 1.31263447,  2.85569215],       [ 3.77748752,  5.88916492],       [ 1.22884631,  2.63401628],       [ 0.87749791,  2.41646147],       [ 0.        ,  1.60662118],       [ 0.16483974,  1.35238755],       [ 0.19204041,  1.30477166],       [ 0.        ,  1.25302017],       [ 0.47205645,  1.78522372],       [ 0.68440294,  1.81716251],       [ 1.30034328,  2.80975127],       [ 3.36661482,  5.13904381],       [ 1.0091691 ,  2.47092557],       [ 1.78951907,  3.43944812],       [ 0.31757116,  1.93106031],       [ 0.        ,  1.45960736],       [ 0.35922313,  1.42397308],       [ 0.        ,  1.36491971],       [ 0.19113439,  1.4069314 ],       [ 1.07407451,  2.56333733],       [ 0.        ,  1.27639663],       [ 0.35049558,  1.44190764],       [ 0.        ,  1.69425641],       [ 0.        ,  1.21316028],       [ 0.        ,  1.17188358],       [ 0.51330721,  1.73097765]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   5.38870239e+00],       [  5.47000000e+02,   2.43640442e+01],       [  1.73200000e+03,   9.34564781e+00],       [  5.47700000e+03,   3.69468594e+00],       [  3.16220000e+04,   1.23124826e+00]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   5.78288574e+01],       [  5.47000000e+02,   1.98288841e+01,   2.90822983e+01],       [  1.73200000e+03,   8.10003185e+00,   1.06647301e+01],       [  5.47700000e+03,   3.14008045e+00,   4.29858541e+00],       [  3.16220000e+04,   9.34773982e-01,   1.57825875e+00]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]
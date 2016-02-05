Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.44289196,  0.        ,  0.3563478 ,  0.        ,  0.48529291,        1.40104508,  0.        ,  0.        ,  1.30900264,  0.5623619 ,        0.45627591,  0.        ,  0.48613662,  0.        ,  0.        ,        0.        ,  0.        ,  0.03391537,  0.75703996,  0.99544311,        0.29565498,  2.9137001 ,  3.33656335,  0.28658915,  0.95821917,        0.        ,  1.20617282,  0.        ,  1.14762735,  1.60007977,        0.62177807,  0.44034052,  0.57238793,  2.46440125,  1.74098921,        0.        ,  0.5975579 ,  1.07797635,  0.        ,  0.        ,        0.        ,  0.        ,  0.        ,  2.11015105,  0.64761323,        0.2961176 ,  0.34658214,  0.06377625]
FluxHistoryError = [[ 0.05718076,  1.03886378],       [ 0.        ,  1.68793714],       [ 0.        ,  2.20790136],       [ 0.        ,  1.34518361],       [ 0.        ,  2.10210562],       [ 0.76318634,  2.17308497],       [ 0.        ,  1.01938272],       [ 0.        ,  0.9737519 ],       [ 0.65513593,  2.14830756],       [ 0.07629496,  1.22074604],       [ 0.06096742,  1.02743483],       [ 0.        ,  1.50088906],       [ 0.        ,  1.8314653 ],       [ 0.        ,  1.68825102],       [ 0.        ,  1.40604758],       [ 0.        ,  1.49707663],       [ 0.        ,  1.34970522],       [ 0.        ,  1.837782  ],       [ 0.26498112,  1.43647802],       [ 0.46517676,  1.71803284],       [ 0.        ,  2.04234609],       [ 2.08573246,  3.85481143],       [ 2.31273508,  4.50684404],       [ 0.        ,  1.83666241],       [ 0.39368546,  1.66714215],       [ 0.        ,  1.42995536],       [ 0.63436955,  1.92284632],       [ 0.        ,  2.26307034],       [ 0.60691845,  1.82688189],       [ 0.88120514,  2.46965122],       [ 0.15953943,  1.35071218],       [ 0.        ,  2.16126299],       [ 0.        ,  3.27990222],       [ 1.73478591,  3.30300665],       [ 0.83037084,  2.81714296],       [ 0.        ,  1.33711076],       [ 0.11653262,  1.3879056 ],       [ 0.39665359,  2.01424527],       [ 0.        ,  1.46001017],       [ 0.        ,  1.95071781],       [ 0.        ,  1.09086049],       [ 0.        ,  2.28143144],       [ 0.        ,  0.94099396],       [ 1.12032807,  3.28342724],       [ 0.        ,  2.42871636],       [ 0.        ,  1.96937877],       [ 0.03940833,  0.89991105],       [ 0.        ,  1.21208   ]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   5.24137077e+01],       [  5.47000000e+02,   8.81568623e+00],       [  1.73200000e+03,   4.20041037e+00],       [  5.47700000e+03,   1.06733775e+00],       [  3.16220000e+04,   1.68788388e-01]]
SpectrumError = [[  1.73000000e+02,   2.26961689e+01,   8.34572906e+01],       [  5.47000000e+02,   5.27518177e+00,   1.24775000e+01],       [  1.73200000e+03,   3.34934735e+00,   5.13238144e+00],       [  5.47700000e+03,   7.65704870e-01,   1.43094873e+00],       [  3.16220000e+04,   6.24848157e-02,   3.32548738e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]
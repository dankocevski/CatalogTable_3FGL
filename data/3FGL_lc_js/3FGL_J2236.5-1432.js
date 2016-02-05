Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [   2.43019366,    5.35091257,    1.3618927 ,    5.05493021,          1.06430566,    2.49780107,    6.87709713,    9.60086632,         11.93685818,    1.40328681,    1.93512511,    4.38456774,          3.55301237,    0.60989124,    3.62923384,    1.80268049,          2.13968658,    4.06033325,    1.81923187,    9.49241638,         24.61918068,    6.15490532,   16.84309387,    3.195894  ,          6.27061796,    1.21957231,    2.76549673,    6.8706975 ,          2.78390765,    1.60182285,    0.85550296,    0.50813681,          0.38099936,    0.        ,    1.92540026,    8.18208694,          9.00580692,    3.27595878,    3.52181458,    4.98261786,          2.47155261,    3.62614655,    1.92006946,    4.01323748,         14.35521984,   28.73594856,  100.1673584 ,   41.95466614]
FluxHistoryError = [[  1.56791711e+00,   3.40777302e+00],       [  4.26428366e+00,   6.53344250e+00],       [  6.48638725e-01,   2.18986630e+00],       [  4.06999111e+00,   6.12434340e+00],       [  3.98047984e-01,   1.88540101e+00],       [  1.68009377e+00,   3.41418123e+00],       [  5.70333529e+00,   8.14681530e+00],       [  8.28604984e+00,   1.10078020e+01],       [  1.05085669e+01,   1.34413967e+01],       [  6.65545762e-01,   2.25459671e+00],       [  1.11418891e+00,   2.85965490e+00],       [  3.33067966e+00,   5.54326630e+00],       [  2.57813740e+00,   4.62038851e+00],       [  0.00000000e+00,   2.74135762e+00],       [  2.63985109e+00,   4.70948982e+00],       [  8.81197333e-01,   2.90664577e+00],       [  1.36625028e+00,   3.02860737e+00],       [  2.94762993e+00,   5.29119587e+00],       [  8.24486971e-01,   3.05385780e+00],       [  8.16760254e+00,   1.09014788e+01],       [  2.23019619e+01,   2.69363995e+01],       [  5.03274298e+00,   7.35774994e+00],       [  1.48557758e+01,   1.89397926e+01],       [  2.24591064e+00,   4.26432943e+00],       [  5.07005692e+00,   7.57947922e+00],       [  3.97422552e-01,   2.20487356e+00],       [  1.80857301e+00,   3.82266951e+00],       [  5.48953247e+00,   8.36119747e+00],       [  1.94253588e+00,   3.71743512e+00],       [  6.80726230e-01,   2.70447826e+00],       [  2.67114222e-01,   1.67102194e+00],       [  3.49336863e-03,   1.23062873e+00],       [  0.00000000e+00,   2.39073399e+00],       [  0.00000000e+00,   1.36122632e+00],       [  1.06278348e+00,   2.96325922e+00],       [  6.94646168e+00,   9.49678612e+00],       [  7.32389450e+00,   1.08219166e+01],       [  2.32144308e+00,   4.36212254e+00],       [  2.38525057e+00,   4.78992510e+00],       [  3.81697392e+00,   6.26062298e+00],       [  1.59661019e+00,   3.46187878e+00],       [  2.45153379e+00,   4.96563148e+00],       [  1.13846636e+00,   2.84100175e+00],       [  2.76957750e+00,   5.40604019e+00],       [  1.28593016e+01,   1.59180079e+01],       [  2.66539917e+01,   3.08179054e+01],       [  9.67499161e+01,   1.03584801e+02],       [  3.96548042e+01,   4.42545280e+01]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   5.10902771e+02],       [  5.47000000e+02,   2.06149811e+02],       [  1.73200000e+03,   5.60602570e+01],       [  5.47700000e+03,   1.24697828e+01],       [  3.16220000e+04,   2.63209820e+00]]
SpectrumError = [[  1.73000000e+02,   4.74389648e+02,   5.47415894e+02],       [  5.47000000e+02,   1.98549911e+02,   2.13749710e+02],       [  1.73200000e+03,   5.35569382e+01,   5.85635757e+01],       [  5.47700000e+03,   1.14336815e+01,   1.35058842e+01],       [  3.16220000e+04,   2.19437075e+00,   3.12563443e+00]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]
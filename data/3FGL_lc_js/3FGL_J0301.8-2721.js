Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.29916415,  0.        ,  0.64326042,  0.4915759 ,  0.30640951,        0.26216999,  1.66903114,  0.        ,  0.08566782,  0.73752964,        0.28907597,  0.        ,  0.31056526,  1.60242641,  0.38470089,        0.14815071,  0.30689293,  0.92003924,  0.        ,  0.32462808,        0.21560822,  0.80919874,  0.41795611,  0.        ,  0.        ,        0.45998791,  0.08839082,  0.08702471,  0.33061957,  1.0036509 ,        0.85566002,  0.        ,  0.59401238,  0.17022838,  0.16706662,        0.3495084 ,  0.33683917,  0.75638121,  0.        ,  0.        ,        0.17062654,  1.39877594,  0.36883482,  0.        ,  0.        ,        0.        ,  0.41794506,  0.16597092]
FluxHistoryError = [[ 0.        ,  2.11770913],       [ 0.        ,  1.37919736],       [ 0.21434093,  1.31481647],       [ 0.        ,  2.04757518],       [ 0.        ,  1.67233184],       [ 0.        ,  1.67685822],       [ 0.79809695,  2.66371846],       [ 0.        ,  2.01888394],       [ 0.        ,  1.57846305],       [ 0.17030174,  1.57623005],       [ 0.        ,  1.74150467],       [ 0.        ,  1.39077795],       [ 0.        ,  1.62820497],       [ 0.8638168 ,  2.53459883],       [ 0.        ,  2.12389672],       [ 0.        ,  1.95341793],       [ 0.        ,  2.23823768],       [ 0.39012355,  1.56053448],       [ 0.        ,  1.07605231],       [ 0.        ,  1.82320556],       [ 0.        ,  1.59184061],       [ 0.23222429,  1.54464102],       [ 0.03461862,  0.99659842],       [ 0.        ,  1.28627896],       [ 0.        ,  1.15177095],       [ 0.        ,  2.37853363],       [ 0.        ,  1.06322937],       [ 0.        ,  1.83325496],       [ 0.        ,  1.78082061],       [ 0.40582478,  1.7907114 ],       [ 0.32211977,  1.60480452],       [ 0.        ,  1.17825866],       [ 0.02210659,  1.48905945],       [ 0.        ,  1.17247452],       [ 0.        ,  2.01500849],       [ 0.        ,  1.70544231],       [ 0.        ,  1.80005702],       [ 0.02038407,  1.74548769],       [ 0.        ,  0.89803088],       [ 0.        ,  1.73735964],       [ 0.        ,  1.63530423],       [ 0.42729044,  2.54368687],       [ 0.        ,  2.00040194],       [ 0.        ,  1.59199178],       [ 0.        ,  1.31883717],       [ 0.        ,  1.18456662],       [ 0.08607641,  1.04400718],       [ 0.        ,  1.66689336]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.62635124e+00],       [  5.47000000e+02,   4.86945343e+00],       [  1.73200000e+03,   2.40930605e+00],       [  5.47700000e+03,   3.63854378e-01],       [  3.16220000e+04,   9.25469995e-02]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   5.12073601e+01],       [  5.47000000e+02,   1.67377973e+00,   8.25265408e+00],       [  1.73200000e+03,   1.69429970e+00,   3.20117331e+00],       [  5.47700000e+03,   1.52913183e-01,   6.42878830e-01],       [  3.16220000e+04,   2.72485465e-02,   2.17824146e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]
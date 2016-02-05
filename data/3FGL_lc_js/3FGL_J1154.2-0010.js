Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.92449784,  0.        ,  0.36333287,  0.65699148,        1.21882641,  0.5456202 ,  0.51281297,  0.63945013,  0.        ,        0.10760225,  0.93139011,  0.27493924,  0.        ,  1.09320557,        0.35220709,  0.61634952,  0.45380273,  0.36102331,  0.        ,        0.        ,  0.        ,  0.41654512,  0.        ,  0.1345395 ,        0.        ,  0.        ,  0.33564961,  0.        ,  0.11203478,        0.        ,  0.        ,  0.        ,  0.25527033,  0.        ,        0.        ,  0.        ,  0.        ,  0.        ,  0.        ,        0.50690722,  0.38466951,  0.        ,  0.        ,  0.30368412,        0.36118311,  0.        ,  0.        ]
FluxHistoryError = [[ 0.        ,  0.53812182],       [ 0.4702985 ,  1.4857198 ],       [ 0.        ,  0.85961068],       [ 0.12286222,  0.72836363],       [ 0.37975454,  1.01714659],       [ 0.79326916,  1.73264313],       [ 0.22763777,  0.94908226],       [ 0.23645991,  0.91473472],       [ 0.30934119,  1.0583955 ],       [ 0.        ,  0.6756134 ],       [ 0.        ,  0.80537786],       [ 0.54330611,  1.40378225],       [ 0.09043799,  0.56351554],       [ 0.        ,  0.61660403],       [ 0.56314909,  1.77172971],       [ 0.14132911,  0.68309289],       [ 0.30631116,  1.04400814],       [ 0.1413039 ,  0.91688359],       [ 0.09314501,  0.775626  ],       [ 0.        ,  0.99076933],       [ 0.        ,  0.89544666],       [ 0.        ,  0.65627581],       [ 0.17037955,  0.79108512],       [ 0.        ,  1.17429388],       [ 0.        ,  1.05615236],       [ 0.        ,  0.94452405],       [ 0.        ,  0.68613952],       [ 0.01595739,  0.77572829],       [ 0.        ,  0.72890562],       [ 0.        ,  0.75106578],       [ 0.        ,  0.75641656],       [ 0.        ,  0.90030807],       [ 0.        ,  0.96729618],       [ 0.        ,  1.5358654 ],       [ 0.        ,  0.60151851],       [ 0.        ,  1.20607483],       [ 0.        ,  0.73959482],       [ 0.        ,  0.81447589],       [ 0.        ,  0.87923181],       [ 0.        ,  0.6658929 ],       [ 0.108877  ,  1.05211306],       [ 0.12061208,  0.74839973],       [ 0.        ,  0.87647331],       [ 0.        ,  0.69373226],       [ 0.09567863,  0.65756226],       [ 0.        ,  1.48916119],       [ 0.        ,  0.55149883],       [ 0.        ,  0.84765726]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   2.61363773e+01],       [  5.47000000e+02,   5.35732555e+00],       [  1.73200000e+03,   1.97160470e+00],       [  5.47700000e+03,   9.98549819e-01],       [  3.16220000e+04,   1.07869041e+00]]
SpectrumError = [[  1.73000000e+02,   2.05725288e+00,   5.06417885e+01],       [  5.47000000e+02,   1.77280712e+00,   9.21266460e+00],       [  1.73200000e+03,   1.16611218e+00,   2.87546253e+00],       [  5.47700000e+03,   6.94796801e-01,   1.36240256e+00],       [  3.16220000e+04,   7.87137806e-01,   1.42907262e+00]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]
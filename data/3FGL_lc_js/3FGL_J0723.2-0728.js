Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.36401716,  0.15806493,  0.        ,  0.39490068,  0.        ,        0.23194784,  0.        ,  0.70574385,  0.82013196,  0.27390978,        0.        ,  0.        ,  0.75823653,  0.        ,  0.52608275,        0.3568995 ,  0.        ,  0.        ,  1.13424742,  0.12250625,        0.38832727,  0.        ,  0.        ,  0.84584695,  0.        ,        0.        ,  0.        ,  0.        ,  0.55311465,  0.2451662 ,        0.1493483 ,  1.27539623,  1.05711567,  0.20608449,  0.        ,        0.        ,  0.60285974,  0.        ,  0.        ,  0.        ,        0.        ,  0.        ,  0.        ,  0.        ,  0.        ,        0.43542641,  1.11720395,  0.        ]
FluxHistoryError = [[ 0.08001912,  0.87673759],       [ 0.        ,  1.10349718],       [ 0.        ,  1.48058033],       [ 0.04877374,  0.85115123],       [ 0.        ,  1.10503399],       [ 0.        ,  1.58180553],       [ 0.        ,  0.63249224],       [ 0.21212047,  1.40399373],       [ 0.34784555,  1.3980217 ],       [ 0.        ,  1.63269255],       [ 0.        ,  1.41272235],       [ 0.        ,  1.14927363],       [ 0.26121995,  1.45094883],       [ 0.        ,  0.97292948],       [ 0.01918936,  1.29707134],       [ 0.        ,  1.98130608],       [ 0.        ,  2.01006937],       [ 0.        ,  0.84927303],       [ 0.41813719,  2.12269831],       [ 0.        ,  1.38932502],       [ 0.        ,  1.96059528],       [ 0.        ,  1.01037836],       [ 0.        ,  1.25474906],       [ 0.33160973,  1.60438156],       [ 0.        ,  1.21571064],       [ 0.        ,  1.52046692],       [ 0.        ,  1.10340524],       [ 0.        ,  0.98721725],       [ 0.0738751 ,  1.27087665],       [ 0.        ,  1.82505371],       [ 0.        ,  1.53723077],       [ 0.69857317,  2.02685285],       [ 0.36323023,  2.04754472],       [ 0.        ,  1.85663569],       [ 0.        ,  0.84975797],       [ 0.        ,  1.79837084],       [ 0.26327834,  1.09515738],       [ 0.        ,  1.47544634],       [ 0.        ,  1.12047935],       [ 0.        ,  1.67160833],       [ 0.        ,  1.30058956],       [ 0.        ,  1.60857272],       [ 0.        ,  1.65188539],       [ 0.        ,  0.75906962],       [ 0.        ,  1.53339136],       [ 0.13163435,  0.9474948 ],       [ 0.23083019,  2.26538086],       [ 0.        ,  1.09253669]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   5.86468658e+01],       [  5.47000000e+02,   6.06773973e-01],       [  1.73200000e+03,   8.21884155e-01],       [  5.47700000e+03,   9.68760610e-01],       [  3.16220000e+04,   5.63336849e-01]]
SpectrumError = [[  1.73000000e+02,   1.98013458e+01,   9.94145660e+01],       [  5.47000000e+02,   0.00000000e+00,   1.38345257e+01],       [  1.73200000e+03,   0.00000000e+00,   3.29541326e+00],       [  5.47700000e+03,   5.87495089e-01,   1.41894484e+00],       [  3.16220000e+04,   3.47469419e-01,   8.37583423e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]
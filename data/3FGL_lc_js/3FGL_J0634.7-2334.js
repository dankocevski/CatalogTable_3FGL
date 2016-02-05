Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 1.30982006,  1.32628059,  0.60229087,  3.16618156,  4.16222668,        0.79994583,  0.        ,  0.        ,  0.58267671,  1.4167918 ,        2.20679641,  0.        ,  0.        ,  6.30988789,  1.77106524,        1.67679822,  1.98536813,  2.64615011,  1.6631279 ,  0.        ,        2.54300666,  4.34028864,  3.81622529,  5.05365849,  0.24727835,        2.47598529,  0.        ,  0.        ,  1.9445802 ,  1.08677649,        0.66755968,  3.52011871,  4.22607708,  0.        ,  0.        ,        2.38551497,  0.83801204,  0.        ,  4.88300943,  2.19983864,        0.        ,  3.28677487,  4.29970264,  0.75417078,  0.73286003,        0.        ,  1.55360115,  0.        ]
FluxHistoryError = [[ 0.        ,  5.01898468],       [ 0.10003006,  2.75604057],       [ 0.        ,  4.00023675],       [ 1.76725173,  4.72724247],       [ 2.32450533,  6.15216541],       [ 0.01354855,  1.87459195],       [ 0.        ,  3.28753662],       [ 0.        ,  3.6393249 ],       [ 0.        ,  3.15007502],       [ 0.        ,  5.02661717],       [ 0.87414086,  3.76037121],       [ 0.        ,  3.27910066],       [ 0.        ,  3.02406287],       [ 4.57688284,  8.20400715],       [ 0.0614177 ,  3.85936022],       [ 0.29139519,  3.21868944],       [ 0.26815045,  4.19904232],       [ 1.30322683,  4.17944574],       [ 0.        ,  5.83059692],       [ 0.        ,  3.13271761],       [ 0.80324757,  4.44794798],       [ 2.60580063,  6.28240299],       [ 2.42765284,  5.35089779],       [ 2.87701464,  7.5765028 ],       [ 0.        ,  2.92896618],       [ 0.48718429,  4.77339649],       [ 0.        ,  2.88029552],       [ 0.        ,  3.37421322],       [ 0.01747072,  4.25012827],       [ 0.        ,  4.45194268],       [ 0.        ,  4.65434533],       [ 1.77903056,  5.42375135],       [ 1.98595548,  6.62298584],       [ 0.        ,  2.85507679],       [ 0.        ,  2.76611543],       [ 0.5859431 ,  4.34054136],       [ 0.        ,  3.75429755],       [ 0.        ,  3.10719371],       [ 3.12309194,  6.77399445],       [ 0.17389345,  4.50793743],       [ 0.        ,  2.6730392 ],       [ 1.33906543,  5.42030621],       [ 2.14527678,  6.63098812],       [ 0.        ,  3.54826939],       [ 0.        ,  4.91896337],       [ 0.        ,  2.22434378],       [ 0.        ,  5.50332844],       [ 0.        ,  3.11624908]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.65909531e+02],       [  5.47000000e+02,   2.56639977e+01],       [  1.73200000e+03,   4.78203154e+00],       [  5.47700000e+03,   3.28007579e-01],       [  3.16220000e+04,   1.40486572e-05]]
SpectrumError = [[  1.73000000e+02,   1.13922348e+02,   2.18057281e+02],       [  5.47000000e+02,   1.89950504e+01,   3.25691528e+01],       [  1.73200000e+03,   3.66340208e+00,   5.99035454e+00],       [  5.47700000e+03,   7.99334496e-02,   6.49728119e-01],       [  3.16220000e+04,   0.00000000e+00,   2.92653721e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]
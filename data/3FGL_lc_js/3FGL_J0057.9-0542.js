Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 4.21913052,  0.        ,  0.        ,  0.50974017,  1.83530414,        0.13515349,  0.        ,  0.10371733,  2.28231525,  0.        ,        0.16642171,  1.66089582,  0.40898421,  1.6414969 ,  2.29475927,        0.74149287,  0.        ,  0.74544102,  0.        ,  1.0747844 ,        0.11228049,  0.85384828,  0.10011265,  1.04835677,  0.68754095,        0.        ,  0.43856239,  0.99944317,  0.46765566,  0.        ,        0.65769553,  4.34403849,  0.61572903,  0.83761275,  2.50924802,        2.74405241,  2.6760397 ,  0.        ,  0.73905408,  0.        ,        1.64823818,  1.33472514,  0.9120546 ,  0.        ,  1.50348675,        0.93753433,  0.45510098,  1.09030128]
FluxHistoryError = [[ 2.85204458,  5.71117258],       [ 0.        ,  1.78459752],       [ 0.        ,  2.17702436],       [ 0.        ,  2.88274938],       [ 0.74526322,  3.11818814],       [ 0.        ,  1.67240794],       [ 0.        ,  1.69058156],       [ 0.        ,  2.81271625],       [ 1.15853131,  3.57130432],       [ 0.        ,  1.73326886],       [ 0.        ,  2.2963801 ],       [ 0.65772045,  2.91303205],       [ 0.        ,  2.96356204],       [ 0.59751987,  3.11335945],       [ 0.92235959,  3.83864784],       [ 0.        ,  3.52541864],       [ 0.        ,  2.05943823],       [ 0.        ,  3.38771063],       [ 0.        ,  3.07205439],       [ 0.        ,  3.71565354],       [ 0.        ,  3.71907151],       [ 0.19888771,  1.81672621],       [ 0.        ,  3.79755328],       [ 0.        ,  3.89021277],       [ 0.        ,  3.41659182],       [ 0.        ,  3.18826032],       [ 0.        ,  3.03874993],       [ 0.        ,  4.38291132],       [ 0.        ,  2.65429401],       [ 0.        ,  3.34473038],       [ 0.        ,  3.31609821],       [ 2.69582272,  6.18127728],       [ 0.        ,  3.95263451],       [ 0.15162826,  1.85940433],       [ 1.2410481 ,  3.9715848 ],       [ 1.53743505,  4.07174492],       [ 1.36760354,  4.20803833],       [ 0.        ,  3.40069723],       [ 0.        ,  3.47551143],       [ 0.        ,  3.11283588],       [ 0.68381524,  2.83185506],       [ 0.17476559,  2.94248605],       [ 0.        ,  3.46623665],       [ 0.        ,  3.333112  ],       [ 0.57226008,  2.68823385],       [ 0.21275085,  1.99510586],       [ 0.        ,  3.64326403],       [ 0.        ,  3.68722224]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   4.55997238e+01],       [  5.47000000e+02,   1.42811365e+01],       [  1.73200000e+03,   2.39031768e+00],       [  5.47700000e+03,   4.75837648e-01],       [  3.16220000e+04,   8.74806270e-02]]
SpectrumError = [[  1.73000000e+02,   1.15333061e+01,   8.06185608e+01],       [  5.47000000e+02,   9.41653252e+00,   1.94056187e+01],       [  1.73200000e+03,   1.47576690e+00,   3.39054060e+00],       [  5.47700000e+03,   2.40095392e-01,   7.86550522e-01],       [  3.16220000e+04,   2.29961127e-02,   2.11150885e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]
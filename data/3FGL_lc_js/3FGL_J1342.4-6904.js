Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.98825979,  2.49173951,  7.17781734,  0.79190308,  2.6801343 ,        4.56573772,  4.6955905 ,  0.        ,  0.81257313,  0.50828546,        3.93238831,  0.        ,  1.02366304,  0.        ,  0.        ,        0.        ,  0.        ,  3.0002234 ,  0.36716381,  1.85514736,        4.02828217,  1.79295313,  0.        ,  0.64502525,  1.87513137,        0.69207948,  0.93000388,  0.65260005,  1.19963646,  1.7847805 ,        1.67147577,  0.        ,  0.        ,  1.81837797,  0.        ,        4.36593628,  0.69753778,  1.78532779,  2.73565888,  0.        ,        3.17760253,  0.90190488,  6.60456848,  2.56543827,  0.        ,        0.        ,  0.        ,  0.        ]
FluxHistoryError = [[  0.        ,   7.00947428],       [  0.45662856,   4.95705605],       [  4.35768223,  10.25215054],       [  0.        ,   6.59950119],       [  0.32828021,   5.72456741],       [  1.89550781,   7.51357555],       [  1.96117163,   7.53398228],       [  0.        ,   5.55856037],       [  0.        ,   6.12342137],       [  0.        ,   5.13124365],       [  1.71006751,   6.51875782],       [  0.        ,   5.28395414],       [  0.        ,   6.43618631],       [  0.        ,   4.10051203],       [  0.        ,   4.63809013],       [  0.        ,   3.31659961],       [  0.        ,   4.72534847],       [  0.69689345,   5.61970615],       [  0.        ,   4.9137589 ],       [  0.        ,   7.43781137],       [  1.64609694,   6.61205578],       [  0.43373656,   3.84228516],       [  0.        ,   4.35696363],       [  0.        ,   5.2239852 ],       [  0.        ,   6.71231961],       [  0.        ,   5.64179176],       [  0.        ,   5.20770383],       [  0.        ,   4.9638226 ],       [  0.        ,   5.69238949],       [  0.21134317,   3.70909238],       [  0.        ,   5.91514099],       [  0.        ,   4.5676651 ],       [  0.        ,   4.01735735],       [  0.        ,   6.61383152],       [  0.        ,   3.35936618],       [  1.79935575,   7.12420654],       [  0.        ,   4.7286309 ],       [  0.        ,   6.60648239],       [  0.55599761,   5.1744957 ],       [  0.        ,   4.21410275],       [  0.80125213,   5.7455492 ],       [  0.        ,   5.05483133],       [  3.83239746,   9.54601097],       [  0.20202756,   5.21634912],       [  0.        ,   3.85652733],       [  0.        ,   4.53071451],       [  0.        ,   3.61022687],       [  0.        ,   4.97721052]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.51465012e+02],       [  5.47000000e+02,   2.49054146e+01],       [  1.73200000e+03,   2.13100600e+00],       [  5.47700000e+03,   8.73174667e-01],       [  3.16220000e+04,   1.27484187e-01]]
SpectrumError = [[  1.73000000e+02,   8.92704620e+01,   2.15091812e+02],       [  5.47000000e+02,   1.67069740e+01,   3.33103409e+01],       [  1.73200000e+03,   7.70858884e-01,   3.63489008e+00],       [  5.47700000e+03,   5.06820917e-01,   1.30153382e+00],       [  3.16220000e+04,   4.20674384e-02,   2.63511002e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]
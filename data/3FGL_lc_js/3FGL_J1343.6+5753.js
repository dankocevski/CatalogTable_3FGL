Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.17690668,  1.86255014,  0.1437723 ,  0.85172111,  0.        ,        0.        ,  1.08274472,  0.        ,  0.35444883,  1.99719334,        0.        ,  0.        ,  0.56791776,  0.27131328,  0.34175497,        0.        ,  0.5187059 ,  0.40471551,  0.80167323,  0.36129797,        0.        ,  0.05348187,  0.79507095,  0.        ,  1.43192494,        0.17773777,  0.        ,  0.5860073 ,  0.        ,  1.07626259,        0.        ,  0.32351223,  0.        ,  0.        ,  0.65896851,        0.        ,  0.57971352,  0.        ,  1.37158895,  0.        ,        0.40334487,  0.        ,  2.03359866,  0.77984208,  0.93610567,        0.19722438,  1.60667872,  0.        ]
FluxHistoryError = [[ 0.        ,  2.32779297],       [ 0.94168109,  2.9179523 ],       [ 0.        ,  2.14184171],       [ 0.        ,  3.00697476],       [ 0.        ,  1.30657911],       [ 0.        ,  1.73759675],       [ 0.40928185,  1.93003416],       [ 0.        ,  1.81764686],       [ 0.        ,  2.15977028],       [ 1.02589798,  3.14430285],       [ 0.        ,  1.38538396],       [ 0.        ,  2.42474794],       [ 0.        ,  2.50257891],       [ 0.        ,  1.95997903],       [ 0.        ,  1.86837238],       [ 0.        ,  1.37759233],       [ 0.        ,  2.43641692],       [ 0.        ,  2.04607221],       [ 0.25564599,  1.52235234],       [ 0.        ,  2.19065976],       [ 0.        ,  1.67079115],       [ 0.        ,  1.74249416],       [ 0.20030868,  1.55485153],       [ 0.        ,  1.56202996],       [ 0.60468131,  2.34054422],       [ 0.        ,  2.23271662],       [ 0.        ,  1.18414581],       [ 0.        ,  2.41294271],       [ 0.        ,  1.50925088],       [ 0.35982287,  1.9155159 ],       [ 0.        ,  1.49598384],       [ 0.        ,  2.12512103],       [ 0.        ,  1.03827369],       [ 0.        ,  1.20301747],       [ 0.        ,  2.32674736],       [ 0.        ,  1.36948907],       [ 0.        ,  2.2281943 ],       [ 0.        ,  1.79972303],       [ 0.5564273 ,  2.32781506],       [ 0.        ,  1.2474581 ],       [ 0.04305333,  1.00233698],       [ 0.        ,  1.26573157],       [ 1.24597251,  2.88065791],       [ 0.26315409,  1.46265674],       [ 0.05923688,  1.89951754],       [ 0.        ,  1.82220459],       [ 0.62383169,  2.71139097],       [ 0.        ,  1.47865772]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   7.74293442e+01],       [  5.47000000e+02,   6.34864759e+00],       [  1.73200000e+03,   5.36050975e-01],       [  5.47700000e+03,   4.78021145e-01],       [  3.16220000e+04,   1.50998026e-01]]
SpectrumError = [[  1.73000000e+02,   5.46418304e+01,   1.00296921e+02],       [  5.47000000e+02,   3.33291769e+00,   9.33105659e+00],       [  1.73200000e+03,   3.25559378e-02,   1.10681188e+00],       [  5.47700000e+03,   2.87274659e-01,   7.16557026e-01],       [  3.16220000e+04,   6.20449483e-02,   2.82932073e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]
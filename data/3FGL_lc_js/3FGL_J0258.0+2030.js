Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.36502647,  1.29331577,  0.77849025,  0.9586466 ,  0.97641337,        0.27536175,  0.        ,  0.        ,  1.07038498,  0.40463811,        0.49322435,  1.15396857,  0.        ,  0.        ,  0.        ,        0.38907734,  0.        ,  0.21115485,  0.92882353,  0.        ,        1.37245405,  1.45900142,  0.        ,  0.        ,  0.12881204,        2.83712125,  0.81202918,  0.63491571,  0.        ,  0.71864259,        0.        ,  0.        ,  0.        ,  1.24965906,  0.43924376,        2.55335569,  0.        ,  0.        ,  3.12434316,  0.        ,        0.85297602,  0.        ,  0.95953345,  1.3405925 ,  0.26081982,        0.        ,  0.        ,  0.        ]
FluxHistoryError = [[ 0.        ,  1.8798095 ],       [ 0.40573198,  2.34178805],       [ 0.        ,  2.78134841],       [ 0.39745682,  1.70963895],       [ 0.37660301,  1.81635821],       [ 0.        ,  1.72113571],       [ 0.        ,  1.88082588],       [ 0.        ,  1.23001993],       [ 0.26255733,  2.07044029],       [ 0.        ,  2.48163658],       [ 0.        ,  2.23520729],       [ 0.2352438 ,  2.23480892],       [ 0.        ,  1.13960934],       [ 0.        ,  1.10632801],       [ 0.        ,  1.24779725],       [ 0.        ,  2.75376025],       [ 0.        ,  2.24019074],       [ 0.        ,  2.77723208],       [ 0.        ,  3.12472159],       [ 0.        ,  2.02360415],       [ 0.50722098,  2.48162365],       [ 0.48875093,  2.67130709],       [ 0.        ,  2.07701421],       [ 0.        ,  2.01149511],       [ 0.        ,  2.21590325],       [ 1.85352445,  3.96407032],       [ 0.        ,  3.31539279],       [ 0.17546469,  1.3699131 ],       [ 0.        ,  1.93017626],       [ 0.        ,  2.64809763],       [ 0.        ,  2.07016921],       [ 0.        ,  2.33832383],       [ 0.        ,  1.97949123],       [ 0.42315209,  2.42235589],       [ 0.        ,  2.45519254],       [ 1.65462101,  3.5881784 ],       [ 0.        ,  1.92445529],       [ 0.        ,  2.01939154],       [ 1.98798764,  4.44341898],       [ 0.        ,  2.29994845],       [ 0.25840092,  1.71372104],       [ 0.        ,  1.3060292 ],       [ 0.        ,  3.49001622],       [ 0.44348866,  2.4809196 ],       [ 0.        ,  2.87149349],       [ 0.        ,  2.50745153],       [ 0.        ,  1.9630214 ],       [ 0.        ,  1.13209438]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   6.49010849e+01],       [  5.47000000e+02,   1.70980835e+00],       [  1.73200000e+03,   4.32112265e+00],       [  5.47700000e+03,   9.85476255e-01],       [  3.16220000e+04,   6.19554460e-01]]
SpectrumError = [[  1.73000000e+02,   3.19683571e+01,   9.82272339e+01],       [  5.47000000e+02,   0.00000000e+00,   1.44094429e+01],       [  1.73200000e+03,   2.84241462e+00,   5.89376593e+00],       [  5.47700000e+03,   5.70240617e-01,   1.46840346e+00],       [  3.16220000e+04,   4.09636080e-01,   8.83094072e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]
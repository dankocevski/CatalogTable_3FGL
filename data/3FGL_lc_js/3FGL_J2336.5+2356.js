Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.29560637,  0.        ,  0.62311381,  0.75692904,  0.        ,        1.12977266,  0.66154569,  0.        ,  0.41477937,  0.        ,        0.25972185,  0.26792488,  0.64730924,  2.90168762,  0.        ,        0.5561465 ,  0.07159168,  0.9594003 ,  0.27920362,  0.        ,        0.40707251,  1.1969012 ,  0.        ,  1.07797706,  0.        ,        0.        ,  0.        ,  0.81430471,  0.61425346,  0.        ,        1.36557126,  0.        ,  1.63883924,  0.83318597,  1.39210212,        0.52927715,  0.        ,  1.31190467,  0.63123602,  0.29856387,        0.        ,  0.23307955,  0.        ,  0.        ,  0.        ,        1.76505995,  0.36714095,  0.        ]
FluxHistoryError = [[ 0.        ,  2.059708  ],       [ 0.        ,  1.53665495],       [ 0.06643534,  1.37845802],       [ 0.30712044,  1.38182616],       [ 0.        ,  1.69764555],       [ 0.47602093,  1.92879939],       [ 0.11592519,  1.43199039],       [ 0.        ,  0.87160015],       [ 0.        ,  1.83932418],       [ 0.        ,  1.07036901],       [ 0.        ,  1.59521207],       [ 0.        ,  1.56959519],       [ 0.02205288,  1.45199585],       [ 1.76960969,  4.17562914],       [ 0.        ,  1.11261046],       [ 0.        ,  2.37736022],       [ 0.        ,  1.82949215],       [ 0.        ,  3.16035807],       [ 0.04144263,  0.71314549],       [ 0.        ,  1.70587122],       [ 0.        ,  2.1341823 ],       [ 0.41324013,  2.15878177],       [ 0.        ,  1.73639154],       [ 0.27186137,  2.08698058],       [ 0.        ,  1.83565271],       [ 0.        ,  2.22847915],       [ 0.        ,  1.88074183],       [ 0.30095273,  1.5293932 ],       [ 0.05443591,  1.40873957],       [ 0.        ,  1.86605537],       [ 0.69736707,  2.21092439],       [ 0.        ,  1.42210388],       [ 0.78358817,  2.64165068],       [ 0.29850054,  1.55665278],       [ 0.64516288,  2.29651332],       [ 0.        ,  2.21966237],       [ 0.        ,  1.45699787],       [ 0.52245671,  2.28005028],       [ 0.        ,  2.58746547],       [ 0.        ,  2.18783942],       [ 0.        ,  1.49931753],       [ 0.        ,  2.17836404],       [ 0.        ,  1.99380338],       [ 0.        ,  2.19160557],       [ 0.        ,  1.92285955],       [ 0.90681261,  2.71200776],       [ 0.09171876,  0.86871421],       [ 0.        ,  2.0720675 ]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   5.65057449e+01],       [  5.47000000e+02,   6.64288902e+00],       [  1.73200000e+03,   1.64510918e+00],       [  5.47700000e+03,   6.38668597e-01],       [  3.16220000e+04,   3.32402736e-01]]
SpectrumError = [[  1.73000000e+02,   2.95476933e+01,   8.39371033e+01],       [  5.47000000e+02,   2.66251731e+00,   1.08333530e+01],       [  1.73200000e+03,   8.80751908e-01,   2.49564934e+00],       [  5.47700000e+03,   3.83443981e-01,   9.49777842e-01],       [  3.16220000e+04,   1.83375031e-01,   5.37989974e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]
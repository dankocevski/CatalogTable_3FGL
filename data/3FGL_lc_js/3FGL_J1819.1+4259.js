Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 2.1966126 ,  1.45681429,  0.37317762,  0.88834709,  0.        ,        2.11560559,  0.21531121,  1.06504142,  0.22021158,  0.        ,        0.61920369,  1.50143063,  0.        ,  0.        ,  0.        ,        0.69726938,  0.56649262,  0.        ,  3.54412246,  2.66490817,        0.75360924,  0.61000061,  0.        ,  0.31920248,  0.        ,        0.        ,  0.        ,  1.6181978 ,  0.72570896,  2.02138758,        0.        ,  0.        ,  1.17430174,  0.        ,  0.        ,        0.24246261,  0.        ,  0.42453429,  1.1394304 ,  0.44718531,        4.11529446,  0.        ,  2.61709332,  1.80640984,  1.90233195,        0.        ,  0.        ,  1.66541302]
FluxHistoryError = [[ 1.08033991,  3.49495268],       [ 0.24297214,  2.81667948],       [ 0.        ,  2.58767566],       [ 0.        ,  3.64072865],       [ 0.        ,  2.72175193],       [ 0.78921568,  3.56235337],       [ 0.        ,  3.18315928],       [ 0.        ,  3.64803255],       [ 0.        ,  3.2326382 ],       [ 0.        ,  2.35041428],       [ 0.        ,  3.2646054 ],       [ 0.5294199 ,  2.72955298],       [ 0.        ,  2.17438269],       [ 0.        ,  2.58421755],       [ 0.        ,  1.34840131],       [ 0.        ,  3.34628409],       [ 0.        ,  3.65172416],       [ 0.        ,  2.22735548],       [ 2.08542109,  5.14801931],       [ 1.53230882,  4.04084396],       [ 0.03258979,  1.82685375],       [ 0.        ,  3.30611491],       [ 0.        ,  2.27648592],       [ 0.        ,  3.26777822],       [ 0.        ,  1.33232653],       [ 0.        ,  2.97749996],       [ 0.        ,  2.45968318],       [ 0.45272565,  2.93197775],       [ 0.        ,  3.44515967],       [ 0.94583011,  3.34759164],       [ 0.        ,  2.33537221],       [ 0.        ,  2.2651794 ],       [ 0.26060349,  2.31198907],       [ 0.        ,  2.18922901],       [ 0.        ,  2.7006073 ],       [ 0.        ,  3.25930235],       [ 0.        ,  2.79210854],       [ 0.        ,  3.09093949],       [ 0.03551447,  2.35959911],       [ 0.        ,  2.95492509],       [ 2.76412392,  5.60393763],       [ 0.        ,  2.22756672],       [ 1.25586605,  4.06406164],       [ 0.75703669,  3.03271151],       [ 0.87600732,  3.10325718],       [ 0.        ,  1.94674075],       [ 0.        ,  2.67249966],       [ 0.24894333,  3.23747563]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   7.75869293e+01],       [  5.47000000e+02,   1.53566294e+01],       [  1.73200000e+03,   3.50044429e-01],       [  5.47700000e+03,   8.43449950e-01],       [  3.16220000e+04,   8.74577016e-02]]
SpectrumError = [[  1.73000000e+02,   4.97156906e+01,   1.06728943e+02],       [  5.47000000e+02,   1.08912144e+01,   1.99458408e+01],       [  1.73200000e+03,   0.00000000e+00,   1.98419088e+00],       [  5.47700000e+03,   5.60600162e-01,   1.18081713e+00],       [  3.16220000e+04,   2.44125500e-02,   2.02213019e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]
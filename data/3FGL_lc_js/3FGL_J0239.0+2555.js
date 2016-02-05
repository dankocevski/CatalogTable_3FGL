Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.        ,  1.21885276,  0.        ,  0.2086135 ,        0.81000584,  0.31656656,  0.55217397,  0.        ,  0.        ,        0.60429978,  0.29921788,  0.        ,  0.28012994,  0.        ,        0.62019819,  0.84197438,  0.        ,  0.5108155 ,  0.        ,        0.54520702,  0.        ,  0.        ,  0.46343511,  0.56019473,        0.28003797,  0.        ,  0.        ,  0.        ,  0.8080287 ,        0.30580905,  0.        ,  0.        ,  0.30343011,  1.25145066,        0.51625764,  0.        ,  0.43065661,  0.        ,  0.        ,        0.        ,  0.        ,  0.94799131,  2.01027346,  0.4716846 ,        0.30204505,  0.        ,  0.48191515]
FluxHistoryError = [[ 0.        ,  1.53155196],       [ 0.        ,  1.73880434],       [ 0.55549699,  2.11292076],       [ 0.        ,  1.15741146],       [ 0.        ,  2.29083548],       [ 0.27736515,  1.52993226],       [ 0.        ,  2.22492287],       [ 0.09934437,  1.20990038],       [ 0.        ,  1.19691944],       [ 0.        ,  1.8290329 ],       [ 0.        ,  2.303316  ],       [ 0.        ,  2.14100415],       [ 0.        ,  1.26678789],       [ 0.        ,  1.7882928 ],       [ 0.        ,  1.63699257],       [ 0.19278395,  1.29483199],       [ 0.13539118,  1.71166754],       [ 0.        ,  1.34766567],       [ 0.08332795,  1.16188359],       [ 0.        ,  1.97787905],       [ 0.11431849,  1.25130558],       [ 0.        ,  1.36626029],       [ 0.        ,  1.86543739],       [ 0.14437148,  1.01732635],       [ 0.14053535,  1.23896897],       [ 0.        ,  2.12757632],       [ 0.        ,  1.9225235 ],       [ 0.        ,  1.49721467],       [ 0.        ,  2.08042002],       [ 0.15977246,  1.69361532],       [ 0.        ,  2.47334436],       [ 0.        ,  2.21032667],       [ 0.        ,  1.61285639],       [ 0.        ,  2.05680051],       [ 0.56608176,  2.1124692 ],       [ 0.        ,  2.41781235],       [ 0.        ,  1.67860985],       [ 0.        ,  2.28951329],       [ 0.        ,  1.53335118],       [ 0.        ,  1.61992228],       [ 0.        ,  2.70099211],       [ 0.        ,  1.83968079],       [ 0.01544839,  2.08782935],       [ 1.11373258,  3.02336597],       [ 0.        ,  2.17375389],       [ 0.        ,  1.94859976],       [ 0.        ,  1.75348485],       [ 0.05162126,  1.16407883]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   7.50181351e+01],       [  5.47000000e+02,   8.97510529e+00],       [  1.73200000e+03,   1.17516267e+00],       [  5.47700000e+03,   5.55059314e-01],       [  3.16220000e+04,   2.70311385e-01]]
SpectrumError = [[  1.73000000e+02,   3.02210159e+01,   1.19466179e+02],       [  5.47000000e+02,   4.11910772e+00,   1.41186924e+01],       [  1.73200000e+03,   3.64704251e-01,   2.09290314e+00],       [  5.47700000e+03,   3.13366503e-01,   8.64552319e-01],       [  3.16220000e+04,   1.35011807e-01,   4.60564941e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]
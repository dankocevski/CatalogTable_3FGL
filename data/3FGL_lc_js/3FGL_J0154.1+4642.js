Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.        ,  1.28602374,  3.53868508,  0.34697863,        0.        ,  0.        ,  1.26195168,  1.34459245,  0.21094704,        0.981475  ,  0.39725175,  0.        ,  1.05696225,  0.89766401,        0.        ,  1.70732927,  1.00901759,  0.89192593,  0.53177017,        1.6603632 ,  0.94861329,  0.        ,  1.21594286,  3.00899506,        1.56258512,  2.09342122,  0.        ,  1.28507245,  2.99147844,        1.70726752,  1.1221472 ,  0.92954153,  2.99281096,  0.        ,        0.        ,  0.        ,  0.        ,  0.        ,  2.27265477,        0.        ,  2.7383728 ,  0.        ,  0.98262829,  0.56441104,        0.        ,  0.51809442,  0.8386988 ]
FluxHistoryError = [[ 0.        ,  3.05834818],       [ 0.        ,  2.5517168 ],       [ 0.        ,  4.50904691],       [ 2.10278463,  5.05317688],       [ 0.        ,  3.66425154],       [ 0.        ,  2.79751682],       [ 0.        ,  2.35356379],       [ 0.13269949,  2.76401091],       [ 0.30596304,  2.54501104],       [ 0.        ,  3.73125529],       [ 0.        ,  3.68867648],       [ 0.        ,  3.61121574],       [ 0.        ,  1.65093696],       [ 0.22822225,  2.23101568],       [ 0.        ,  3.87030214],       [ 0.        ,  2.97525287],       [ 0.28659856,  3.16547108],       [ 0.        ,  3.53960145],       [ 0.        ,  3.40400016],       [ 0.        ,  3.29044479],       [ 0.36277151,  3.06971502],       [ 0.        ,  3.75161636],       [ 0.        ,  1.60854423],       [ 0.18204868,  2.38410187],       [ 1.46481836,  4.62212467],       [ 0.25503671,  3.04614067],       [ 0.72229767,  3.61794019],       [ 0.        ,  2.97789526],       [ 0.19468451,  2.62866521],       [ 1.5500046 ,  4.53325462],       [ 0.3348583 ,  3.24136686],       [ 0.0660677 ,  2.54196787],       [ 0.        ,  3.9440226 ],       [ 1.47104287,  4.6826458 ],       [ 0.        ,  2.70810866],       [ 0.        ,  1.82049787],       [ 0.        ,  2.89358425],       [ 0.        ,  3.03086901],       [ 0.        ,  3.15825939],       [ 0.94469166,  3.8355031 ],       [ 0.        ,  2.23420334],       [ 1.49196196,  4.16638851],       [ 0.        ,  2.33176708],       [ 0.2645281 ,  2.0088408 ],       [ 0.        ,  3.19374025],       [ 0.        ,  1.95766211],       [ 0.        ,  3.22412145],       [ 0.        ,  3.29560655]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   6.40343628e+01],       [  5.47000000e+02,   1.00737963e+01],       [  1.73200000e+03,   2.69253397e+00],       [  5.47700000e+03,   3.37691708e-05],       [  3.16220000e+04,   2.72683531e-01]]
SpectrumError = [[  1.73000000e+02,   2.86525955e+01,   9.91187592e+01],       [  5.47000000e+02,   5.30724573e+00,   1.50053864e+01],       [  1.73200000e+03,   1.76396108e+00,   3.70915365e+00],       [  5.47700000e+03,   0.00000000e+00,   3.60458407e-01],       [  3.16220000e+04,   1.44853696e-01,   4.49394107e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]
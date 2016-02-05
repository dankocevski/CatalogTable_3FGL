Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 2.64394712,  1.13519418,  2.77810216,  4.55740881,  2.68051744,        1.86995435,  2.89508677,  2.53608489,  3.73626041,  1.83168948,        4.07769394,  2.46007347,  3.08937597,  3.9756515 ,  4.40359354,        7.00669527,  2.05974913,  2.89989948,  3.78149223,  0.57000202,        3.63805652,  3.51083684,  0.95024896,  1.78948164,  0.89071429,        0.60457522,  0.73571587,  2.36982346,  3.51253843,  2.59977341,        4.08428574,  1.77404082,  4.16167498,  1.68653202,  1.88678694,        0.        ,  1.8101058 ,  3.70400095,  2.79592752,  1.99976003,        1.06617928,  2.40558124,  5.74476719,  2.630445  ,  2.42068243,        4.06570625,  2.5195663 ,  1.6369642 ]
FluxHistoryError = [[ 1.88830721,  3.52443933],       [ 0.43496495,  1.929317  ],       [ 2.00930262,  3.65207434],       [ 3.5089376 ,  5.70758343],       [ 1.81381989,  3.66221619],       [ 1.13345408,  2.75384831],       [ 2.0193944 ,  3.88443613],       [ 1.65491438,  3.55150914],       [ 2.74830365,  4.78321266],       [ 1.1460948 ,  2.64412141],       [ 3.10439849,  5.16375542],       [ 1.66498208,  3.39654922],       [ 2.03700447,  4.30624151],       [ 2.93887353,  5.19740057],       [ 3.20168757,  5.75925159],       [ 5.56459045,  8.61204338],       [ 1.14372778,  3.20748806],       [ 1.78277087,  4.20261908],       [ 2.60070181,  5.16496038],       [ 0.        ,  2.5669995 ],       [ 2.49296379,  4.96686172],       [ 2.44008732,  4.7700429 ],       [ 0.17608726,  1.9299531 ],       [ 0.95643449,  2.84526014],       [ 0.39976788,  1.61361074],       [ 0.07680058,  1.35183394],       [ 0.19526643,  1.57142949],       [ 1.43997562,  3.48377848],       [ 2.55274653,  4.60373735],       [ 1.72059155,  3.63604355],       [ 2.97837424,  5.31821203],       [ 0.82140052,  2.91518688],       [ 3.0930326 ,  5.38508511],       [ 0.99064088,  2.55689335],       [ 1.00299811,  3.00997257],       [ 0.        ,  2.00342679],       [ 1.02478004,  2.79889321],       [ 2.50493813,  5.11814499],       [ 1.88639843,  3.88722563],       [ 1.060467  ,  3.17120862],       [ 0.34634697,  2.0105114 ],       [ 1.54064107,  3.44910479],       [ 4.44861031,  7.19926023],       [ 1.69828463,  3.71552801],       [ 1.65752292,  3.33509755],       [ 2.86561942,  5.47169971],       [ 1.65556169,  3.56895638],       [ 0.85285407,  2.66521883]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   3.40667542e+02],       [  5.47000000e+02,   5.63370590e+01],       [  1.73200000e+03,   1.97078285e+01],       [  5.47700000e+03,   9.95357895e+00],       [  3.16220000e+04,   4.62450743e+00]]
SpectrumError = [[  1.73000000e+02,   2.49640625e+02,   4.26342346e+02],       [  5.47000000e+02,   4.74773712e+01,   6.53940964e+01],       [  1.73200000e+03,   1.77649975e+01,   2.17254581e+01],       [  5.47700000e+03,   8.98052883e+00,   1.09266291e+01],       [  3.16220000e+04,   4.03155279e+00,   5.27052021e+00]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]
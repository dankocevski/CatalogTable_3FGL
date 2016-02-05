Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 2.84564257,  1.57548797,  1.67967689,  3.19621372,  1.0415169 ,        1.71465409,  2.21018529,  2.85208631,  2.23409247,  1.17843854,        2.06966257,  1.18571806,  1.05799651,  2.4485817 ,  1.49185038,        1.39655042,  1.66122901,  2.34383917,  0.80012262,  1.48272204,        1.65525782,  1.70390916,  1.87744045,  1.11564553,  1.36533606,        0.92691714,  0.63800287,  2.2022121 ,  0.67006791,  0.73838103,        2.57074523,  2.12087083,  1.44273305,  0.89730835,  2.59463143,        1.20934772,  1.93539584,  0.        ,  2.30866933,  1.28309047,        0.        ,  1.61586678,  1.22988451,  1.27743459,  1.1401825 ,        0.54321194,  1.40091991,  1.85593832]
FluxHistoryError = [[ 1.727512  ,  4.12393618],       [ 0.88760906,  2.39132357],       [ 0.78281099,  2.70154285],       [ 2.12206459,  4.383564  ],       [ 0.28887838,  1.95560193],       [ 0.93765235,  2.63350153],       [ 1.39368224,  3.15110016],       [ 1.78032744,  4.05173349],       [ 1.46307993,  3.13081217],       [ 0.35745692,  2.13734221],       [ 1.18297565,  3.07696867],       [ 0.56715399,  1.97140467],       [ 0.39773864,  1.84256744],       [ 1.59050035,  3.3947463 ],       [ 0.80932641,  2.27194977],       [ 0.74259746,  2.19664097],       [ 1.02401686,  2.41099906],       [ 1.46656287,  3.32113576],       [ 0.16725451,  1.5666815 ],       [ 0.76357383,  2.29024696],       [ 0.84990549,  2.59776592],       [ 1.00955915,  2.51274252],       [ 1.09211755,  2.77280641],       [ 0.56522405,  1.77368701],       [ 0.60375851,  2.23768926],       [ 0.28956902,  1.70314097],       [ 0.22269997,  1.23132753],       [ 1.46280169,  3.03679371],       [ 0.24439725,  1.24925041],       [ 0.26331109,  1.35771155],       [ 1.80361819,  3.42832208],       [ 1.36068368,  2.9824872 ],       [ 0.62827414,  2.40720439],       [ 0.35187447,  1.61268258],       [ 1.79058242,  3.49269915],       [ 0.56520569,  1.96004379],       [ 1.11374879,  2.86947393],       [ 0.        ,  1.62449062],       [ 1.50152671,  3.21796274],       [ 0.54425621,  2.13340855],       [ 0.        ,  1.25609171],       [ 0.7472744 ,  2.5706811 ],       [ 0.56828707,  2.00489497],       [ 0.72037256,  1.95710707],       [ 0.58572644,  1.83901823],       [ 0.10796875,  1.13010478],       [ 0.76934445,  2.15560412],       [ 1.07158804,  2.74817753]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   7.79227524e+01],       [  5.47000000e+02,   2.61137447e+01],       [  1.73200000e+03,   9.32155037e+00],       [  5.47700000e+03,   1.36656213e+00],       [  3.16220000e+04,   5.39592743e-01]]
SpectrumError = [[  1.73000000e+02,   5.66364059e+01,   9.95685577e+01],       [  5.47000000e+02,   2.22423840e+01,   3.00867367e+01],       [  1.73200000e+03,   8.27318192e+00,   1.04209452e+01],       [  5.47700000e+03,   1.05873370e+00,   1.71547282e+00],       [  3.16220000e+04,   3.69913489e-01,   7.47387171e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]
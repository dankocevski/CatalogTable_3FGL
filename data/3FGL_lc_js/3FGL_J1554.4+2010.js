Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.12985067,  0.        ,  0.34437889,  0.        ,  0.71781695,        1.27546883,  0.        ,  0.74616379,  1.92583477,  1.20042646,        2.06766939,  0.34914726,  0.55400044,  1.54242659,  0.85171074,        1.00731587,  0.64808339,  0.        ,  0.        ,  0.        ,        0.        ,  0.41426659,  0.49372   ,  0.        ,  0.        ,        2.00222063,  0.27884585,  0.59658122,  2.41288519,  1.14826846,        0.39515501,  0.        ,  1.12904251,  2.0160625 ,  0.7778694 ,        0.        ,  0.        ,  1.70911765,  0.        ,  0.        ,        0.68152559,  0.24795672,  0.15518144,  0.        ,  0.36325273,        1.17849672,  1.20758057,  0.        ]
FluxHistoryError = [[ 0.        ,  1.80635159],       [ 0.        ,  1.93394506],       [ 0.        ,  2.00162548],       [ 0.        ,  1.75454307],       [ 0.19446182,  1.45830691],       [ 0.51068687,  2.2807014 ],       [ 0.        ,  1.8224299 ],       [ 0.        ,  2.86805028],       [ 1.01135421,  3.02168703],       [ 0.48332733,  2.12722182],       [ 0.939008  ,  3.39482594],       [ 0.        ,  1.74234194],       [ 0.03521615,  1.31131554],       [ 0.60140395,  2.69381237],       [ 0.02152264,  1.91100144],       [ 0.05429333,  2.26765442],       [ 0.        ,  3.25636381],       [ 0.        ,  1.84136677],       [ 0.        ,  1.62804151],       [ 0.        ,  2.39825249],       [ 0.        ,  2.63196635],       [ 0.        ,  2.89218998],       [ 0.        ,  2.35681385],       [ 0.        ,  1.61075866],       [ 0.        ,  2.70796037],       [ 1.0387311 ,  3.23796773],       [ 0.        ,  2.67805654],       [ 0.        ,  3.588413  ],       [ 1.21462667,  3.79708076],       [ 0.43326217,  2.1386838 ],       [ 0.        ,  2.52228266],       [ 0.        ,  2.32732606],       [ 0.19656396,  2.38867712],       [ 0.7528497 ,  3.4316659 ],       [ 0.        ,  3.08290285],       [ 0.        ,  1.2390449 ],       [ 0.        ,  1.95224643],       [ 0.36536014,  3.22283697],       [ 0.        ,  2.6989944 ],       [ 0.        ,  2.1724391 ],       [ 0.16751784,  1.51493478],       [ 0.        ,  3.09972546],       [ 0.        ,  2.63118866],       [ 0.        ,  2.10282397],       [ 0.        ,  2.81841359],       [ 0.09433043,  2.47073174],       [ 0.15023863,  2.6034236 ],       [ 0.        ,  2.02587843]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   4.68874664e+01],       [  5.47000000e+02,   8.29352856e+00],       [  1.73200000e+03,   2.14875579e+00],       [  5.47700000e+03,   1.00724554e+00],       [  3.16220000e+04,   1.50302649e-01]]
SpectrumError = [[  1.73000000e+02,   1.61943092e+01,   7.79284973e+01],       [  5.47000000e+02,   3.67324018e+00,   1.30539551e+01],       [  1.73200000e+03,   1.27440786e+00,   3.12138844e+00],       [  5.47700000e+03,   6.83523059e-01,   1.38538575e+00],       [  3.16220000e+04,   6.15062639e-02,   2.92119026e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]
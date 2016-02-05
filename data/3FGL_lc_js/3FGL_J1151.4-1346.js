Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.04784343,  1.08044982,  0.2048891 ,  0.93694049,        0.49526018,  0.        ,  1.14129424,  0.        ,  1.33041918,        0.51088881,  0.7394079 ,  1.60198927,  0.74290568,  0.        ,        0.90401506,  0.        ,  0.07065704,  0.        ,  0.        ,        0.33172172,  0.2886802 ,  0.26856446,  0.        ,  1.44451392,        0.88104761,  0.        ,  0.        ,  0.        ,  0.60822672,        0.72158343,  0.        ,  1.18577814,  0.        ,  0.        ,        0.88923228,  0.        ,  1.07136118,  0.        ,  0.        ,        0.31502339,  0.        ,  0.        ,  1.24325621,  0.        ,        0.        ,  0.        ,  0.        ]
FluxHistoryError = [[ 0.        ,  1.34057498],       [ 0.        ,  1.22914753],       [ 0.559807  ,  1.73701406],       [ 0.        ,  1.65568475],       [ 0.45140606,  1.54900765],       [ 0.14144364,  1.05658364],       [ 0.        ,  1.25068057],       [ 0.60604703,  1.84841704],       [ 0.        ,  1.06081164],       [ 0.71339881,  2.08871603],       [ 0.00742632,  1.17926979],       [ 0.25812551,  1.36756039],       [ 0.83827066,  2.53062391],       [ 0.14290679,  1.49063516],       [ 0.        ,  1.60793972],       [ 0.43804401,  1.51349723],       [ 0.        ,  1.58958161],       [ 0.        ,  1.36859897],       [ 0.        ,  1.26089966],       [ 0.        ,  1.91608512],       [ 0.03697273,  0.80959386],       [ 0.        ,  2.01028621],       [ 0.        ,  1.95517015],       [ 0.        ,  1.6516186 ],       [ 0.58931416,  2.45773697],       [ 0.        ,  3.31828511],       [ 0.        ,  1.40725386],       [ 0.        ,  1.27805471],       [ 0.        ,  1.79875302],       [ 0.1227605 ,  1.27212501],       [ 0.19854504,  1.48477817],       [ 0.        ,  1.77177298],       [ 0.5830642 ,  1.98212624],       [ 0.        ,  1.85208917],       [ 0.        ,  1.20350277],       [ 0.25235718,  1.76997364],       [ 0.        ,  1.27738678],       [ 0.21106136,  2.14690685],       [ 0.        ,  1.32517755],       [ 0.        ,  0.83107734],       [ 0.0683877 ,  0.76957989],       [ 0.        ,  1.64495027],       [ 0.        ,  1.33011067],       [ 0.616965  ,  2.04116368],       [ 0.        ,  1.04780579],       [ 0.        ,  1.51347792],       [ 0.        ,  1.55082154],       [ 0.        ,  1.83273435]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   2.16351376e+01],       [  5.47000000e+02,   8.43100357e+00],       [  1.73200000e+03,   1.24687374e+00],       [  5.47700000e+03,   1.21674645e+00],       [  3.16220000e+04,   4.50012982e-01]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   7.87739620e+01],       [  5.47000000e+02,   4.15652037e+00,   1.29239922e+01],       [  1.73200000e+03,   4.65046704e-01,   2.13855910e+00],       [  5.47700000e+03,   8.59880745e-01,   1.63559556e+00],       [  3.16220000e+04,   2.71266937e-01,   6.86287045e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]
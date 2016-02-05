Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.01333724,  0.48309252,  1.06750154,  0.        ,        0.        ,  0.07714209,  0.4030939 ,  0.        ,  0.9538967 ,        0.25183386,  1.30176294,  0.15049441,  0.        ,  0.45078164,        0.17490236,  0.        ,  0.        ,  0.        ,  0.83486193,        0.38107401,  0.42996517,  0.        ,  0.        ,  0.39126715,        0.77031219,  0.28602156,  0.        ,  0.22686635,  0.        ,        0.        ,  0.09153774,  0.1650224 ,  0.1408024 ,  0.09457108,        0.36731669,  0.        ,  0.        ,  0.70067334,  0.257819  ,        0.45731023,  0.78556317,  0.        ,  0.334268  ,  0.        ,        0.        ,  0.56638843,  0.        ]
FluxHistoryError = [[ 0.        ,  0.95704895],       [ 0.        ,  1.20867144],       [ 0.04389814,  1.03662229],       [ 0.60886645,  1.63489282],       [ 0.        ,  1.09195483],       [ 0.        ,  1.06751359],       [ 0.        ,  1.00473705],       [ 0.        ,  2.03009686],       [ 0.        ,  0.7294448 ],       [ 0.48536474,  1.56834328],       [ 0.        ,  1.50936395],       [ 0.73239475,  2.00155258],       [ 0.        ,  1.10833348],       [ 0.        ,  0.89789617],       [ 0.16489783,  0.89381534],       [ 0.        ,  1.09025268],       [ 0.        ,  1.15373147],       [ 0.        ,  0.62577909],       [ 0.        ,  0.94889838],       [ 0.43461725,  1.33413744],       [ 0.10223502,  0.85439491],       [ 0.1469081 ,  0.84721994],       [ 0.        ,  0.96261579],       [ 0.        ,  0.8644473 ],       [ 0.12925968,  0.78986144],       [ 0.28396219,  1.4699173 ],       [ 0.04996896,  0.63999939],       [ 0.        ,  0.92339337],       [ 0.        ,  1.21580319],       [ 0.        ,  0.72017646],       [ 0.        ,  0.57992965],       [ 0.        ,  0.94171687],       [ 0.        ,  1.70728531],       [ 0.00819404,  0.37764996],       [ 0.        ,  1.00836673],       [ 0.09604815,  0.74956006],       [ 0.        ,  0.82108527],       [ 0.        ,  0.9131946 ],       [ 0.33394113,  1.18639755],       [ 0.        ,  1.52832764],       [ 0.13973594,  0.91238713],       [ 0.31935096,  1.4697125 ],       [ 0.        ,  0.8884151 ],       [ 0.        ,  1.59246996],       [ 0.        ,  1.21572769],       [ 0.        ,  0.65927172],       [ 0.        ,  2.07838994],       [ 0.        ,  0.63653708]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   4.10020714e+01],       [  5.47000000e+02,   2.30849594e-01],       [  1.73200000e+03,   2.43756366e+00],       [  5.47700000e+03,   8.68237555e-01],       [  3.16220000e+04,   2.01598868e-01]]
SpectrumError = [[  1.73000000e+02,   1.83750172e+01,   6.41289825e+01],       [  5.47000000e+02,   0.00000000e+00,   6.17565426e+00],       [  1.73200000e+03,   1.71369183e+00,   3.25535202e+00],       [  5.47700000e+03,   6.12911224e-01,   1.18503380e+00],       [  3.16220000e+04,   8.75344425e-02,   3.65735412e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]
Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.77239805,  0.76905113,  1.5815196 ,  0.81086248,  0.78286016,        0.77228552,  0.        ,  0.        ,  1.86466789,  0.        ,        0.74440461,  2.38197947,  0.        ,  0.96317106,  2.56484461,        2.17238355,  0.        ,  0.        ,  1.11594713,  0.85532993,        0.58323789,  0.        ,  0.03833168,  2.47598815,  1.17832077,        0.72571743,  0.03937332,  0.53647304,  3.14823723,  0.        ,        0.        ,  0.        ,  0.        ,  0.7449733 ,  0.        ,        1.56466019,  2.77845907,  0.        ,  2.50896549,  0.        ,        0.74218071,  0.28987443,  0.        ,  2.34038043,  0.        ,        2.51776743,  1.36749065,  0.81158322]
FluxHistoryError = [[ 0.        ,  3.44823366],       [ 0.        ,  3.10396868],       [ 0.60801733,  2.96992564],       [ 0.        ,  3.63431638],       [ 0.        ,  4.03500497],       [ 0.        ,  3.0552879 ],       [ 0.        ,  2.66669178],       [ 0.        ,  2.60448384],       [ 0.60409999,  3.31300044],       [ 0.        ,  2.38189077],       [ 0.        ,  3.71575218],       [ 1.03038776,  4.05756044],       [ 0.        ,  2.93485689],       [ 0.        ,  3.77462941],       [ 1.24358857,  4.1416254 ],       [ 0.60735846,  3.9923532 ],       [ 0.        ,  2.53778815],       [ 0.        ,  3.09464765],       [ 0.        ,  4.01708543],       [ 0.        ,  4.36809224],       [ 0.        ,  3.23249745],       [ 0.        ,  3.33538532],       [ 0.        ,  3.09916823],       [ 1.19968593,  3.97840452],       [ 0.        ,  4.25558126],       [ 0.        ,  3.18594658],       [ 0.        ,  4.2055382 ],       [ 0.        ,  3.66918182],       [ 1.44993138,  4.99989414],       [ 0.        ,  2.39194655],       [ 0.        ,  3.20003343],       [ 0.        ,  1.95903397],       [ 0.        ,  2.51794934],       [ 0.        ,  4.05735719],       [ 0.        ,  2.34006977],       [ 0.22082925,  2.9481709 ],       [ 1.15125728,  4.5503521 ],       [ 0.        ,  2.75335073],       [ 0.90654147,  4.19597292],       [ 0.        ,  2.19082236],       [ 0.        ,  3.93887794],       [ 0.        ,  3.1647023 ],       [ 0.        ,  3.41275144],       [ 0.77213681,  3.96991038],       [ 0.        ,  2.90753794],       [ 1.09063089,  4.25616789],       [ 0.0979073 ,  2.8324914 ],       [ 0.        ,  3.60373968]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   4.45199127e+01],       [  5.47000000e+02,   2.04967709e+01],       [  1.73200000e+03,   3.00375795e+00],       [  5.47700000e+03,   4.05219674e-01],       [  3.16220000e+04,   2.10310891e-01]]
SpectrumError = [[  1.73000000e+02,   4.48527908e+00,   8.40733261e+01],       [  5.47000000e+02,   1.31132393e+01,   2.79814186e+01],       [  1.73200000e+03,   1.67499268e+00,   4.42832851e+00],       [  5.47700000e+03,   4.37541008e-02,   8.20883691e-01],       [  3.16220000e+04,   9.50740278e-02,   3.75445902e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]
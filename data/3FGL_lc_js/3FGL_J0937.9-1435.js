Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 1.04641151,  0.88414067,  0.39665061,  0.        ,  0.20927377,        0.13626261,  0.        ,  0.32399622,  0.        ,  0.        ,        0.        ,  0.        ,  0.42980263,  0.56069601,  0.        ,        0.39342237,  0.        ,  0.63755596,  1.11838579,  0.44176906,        1.43011999,  0.19255558,  0.15453713,  0.        ,  1.00872552,        0.        ,  0.        ,  0.64466667,  0.30175814,  1.53629911,        0.        ,  0.76073951,  0.        ,  0.54616696,  0.        ,        0.98630863,  0.        ,  0.        ,  0.        ,  0.        ,        0.        ,  0.        ,  0.        ,  0.        ,  0.        ,        0.        ,  0.        ,  0.        ]
FluxHistoryError = [[ 0.52062172,  1.67084813],       [ 0.42635152,  1.49358177],       [ 0.        ,  1.82954389],       [ 0.        ,  0.95337039],       [ 0.        ,  1.42307349],       [ 0.        ,  1.23542316],       [ 0.        ,  0.7488839 ],       [ 0.08537439,  0.75577152],       [ 0.        ,  1.03955817],       [ 0.        ,  1.09114981],       [ 0.        ,  0.90315127],       [ 0.        ,  1.24272192],       [ 0.        ,  1.79247603],       [ 0.06807339,  1.2253865 ],       [ 0.        ,  1.88043916],       [ 0.11604404,  0.82129782],       [ 0.        ,  1.27241778],       [ 0.25920141,  1.18190742],       [ 0.49187917,  1.91948664],       [ 0.12853643,  0.93924177],       [ 0.87355721,  2.10950184],       [ 0.        ,  1.81529966],       [ 0.        ,  1.0707836 ],       [ 0.        ,  1.25871575],       [ 0.49427992,  1.6956811 ],       [ 0.        ,  1.31312394],       [ 0.        ,  1.34006989],       [ 0.24322906,  1.20829034],       [ 0.        ,  2.72007903],       [ 0.85076934,  2.38541794],       [ 0.        ,  1.14473307],       [ 0.1505093 ,  1.5758301 ],       [ 0.        ,  1.49696553],       [ 0.14909714,  1.16378081],       [ 0.        ,  1.16071105],       [ 0.16195923,  2.07980537],       [ 0.        ,  1.02889836],       [ 0.        ,  1.36259258],       [ 0.        ,  1.03016973],       [ 0.        ,  1.30929327],       [ 0.        ,  0.85776204],       [ 0.        ,  0.76502132],       [ 0.        ,  1.83042634],       [ 0.        ,  1.26029956],       [ 0.        ,  0.87520087],       [ 0.        ,  1.07467222],       [ 0.        ,  1.0064919 ],       [ 0.        ,  1.46622419]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.10805896e-03],       [  5.47000000e+02,   6.54597187e+00],       [  1.73200000e+03,   2.80807352e+00],       [  5.47700000e+03,   1.15238225e+00],       [  3.16220000e+04,   1.48627639e-01]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   4.86338557e+01],       [  5.47000000e+02,   2.16184235e+00,   1.13243294e+01],       [  1.73200000e+03,   1.93145370e+00,   3.78981543e+00],       [  5.47700000e+03,   8.08468342e-01,   1.56034327e+00],       [  3.16220000e+04,   5.91258109e-02,   2.93290228e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]
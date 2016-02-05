Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 18.053936  ,  14.41195679,  16.42222786,  16.60484314,        22.26204109,  17.6937542 ,  19.06385231,  21.9084301 ,        19.3057003 ,  15.60929966,  15.30864048,  24.94924545,        15.00680065,  25.6300354 ,  15.09769344,  13.99860191,        21.27587128,  14.24565887,  10.88831615,  14.98091793,        14.17944145,  15.35717297,   6.52720404,  12.76880646,        11.91206646,  12.65940189,  12.28126049,  13.81909847,        18.43647575,  18.54630661,  13.3841486 ,   5.00687361,        12.23823452,  14.04214382,  14.05626297,  15.04155636,        10.57137489,  13.67577362,  10.3849411 ,  12.11610126,        20.15215683,  13.08467197,  16.96676254,  13.78582764,        15.80101776,  14.93362331,  13.89477444,   7.72229099]
FluxHistoryError = [[ 13.77447128,  22.73075104],       [ 10.95485973,  18.13711929],       [ 12.37089729,  20.53577995],       [ 12.75285721,  20.59787178],       [ 18.09528732,  26.57402611],       [ 13.62786674,  21.742836  ],       [ 15.88467407,  22.42360115],       [ 17.39314079,  26.71169281],       [ 15.01905441,  23.77442932],       [ 11.93095589,  19.60624695],       [ 10.57069588,  20.40192604],       [ 20.48297501,  29.36301804],       [ 10.84704208,  19.51773834],       [ 22.31061935,  29.04345322],       [ 11.5109787 ,  19.04114723],       [ 10.58755589,  17.63978958],       [ 17.8800087 ,  24.89093399],       [ 11.24107456,  17.47261238],       [  7.84380102,  14.10461998],       [ 11.60630608,  18.66428185],       [ 10.9963522 ,  17.44348907],       [ 10.89252186,  20.0393219 ],       [  4.00169277,   9.43154812],       [  9.38484383,  16.27450752],       [  8.84538078,  15.11934376],       [  9.55490685,  16.0604229 ],       [  8.09097672,  16.69975281],       [ 10.72656441,  17.07946777],       [ 14.57646561,  22.39650345],       [ 15.1385498 ,  22.02361679],       [ 10.05396938,  16.93312263],       [  1.89859986,   8.54627132],       [  9.25351906,  15.42428017],       [ 10.68405056,  17.57053757],       [ 10.78242588,  17.27539444],       [ 12.00602245,  18.31685638],       [  7.22155237,  14.07984734],       [ 10.24695778,  17.39891815],       [  7.24328613,  13.72908688],       [  9.16897774,  15.28384113],       [ 16.83959389,  23.66617203],       [  9.76629639,  16.63240051],       [ 13.71379662,  20.45754433],       [ 10.25785828,  17.43374443],       [ 12.04620171,  19.75260735],       [ 11.19345665,  18.83997345],       [ 10.82807541,  17.15198898],       [  3.29831314,  12.60485554]], dtype=float32
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.08260315e+03],       [  5.47000000e+02,   5.99583374e+02],       [  1.73200000e+03,   1.27500633e+02],       [  5.47700000e+03,   2.78286762e+01],       [  3.16220000e+04,   4.44713497e+00]]
SpectrumError = [[  1.73000000e+02,   7.48825806e+02,   1.32718604e+03],       [  5.47000000e+02,   5.25429443e+02,   6.48866882e+02],       [  1.73200000e+03,   1.19178192e+02,   1.35823074e+02],       [  5.47700000e+03,   2.58633728e+01,   2.97939796e+01],       [  3.16220000e+04,   3.81318998e+00,   5.13492393e+00]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]
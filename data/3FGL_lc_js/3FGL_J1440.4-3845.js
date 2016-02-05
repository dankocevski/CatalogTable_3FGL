Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.57402712,  0.        ,  0.        ,  0.        ,  0.42271623,        1.33062565,  0.        ,  0.        ,  0.        ,  0.        ,        0.27118942,  0.        ,  0.29249996,  0.08298792,  0.        ,        0.        ,  0.28091568,  0.        ,  0.52450436,  0.        ,        0.94145912,  0.25957096,  0.79452497,  1.06770575,  1.0997597 ,        0.19150741,  0.50687772,  0.        ,  0.55136353,  0.26493111,        0.23586136,  0.        ,  0.46274102,  0.        ,  0.        ,        0.        ,  0.        ,  0.        ,  1.00479591,  0.        ,        0.        ,  0.15165205,  0.28142807,  0.38352033,  0.07279912,        0.83355933,  0.611476  ,  0.        ]
FluxHistoryError = [[ 0.13658971,  1.2157495 ],       [ 0.        ,  0.99897081],       [ 0.        ,  1.17208087],       [ 0.        ,  0.84885865],       [ 0.        ,  1.72941002],       [ 0.72675472,  2.07615805],       [ 0.        ,  0.79290235],       [ 0.        ,  0.90730906],       [ 0.        ,  1.02868104],       [ 0.        ,  1.16222203],       [ 0.07132891,  0.63809347],       [ 0.        ,  0.80713028],       [ 0.        ,  1.69107896],       [ 0.        ,  1.14794303],       [ 0.        ,  1.47160459],       [ 0.        ,  1.07254052],       [ 0.        ,  1.5291658 ],       [ 0.        ,  1.00317848],       [ 0.24540392,  0.91976547],       [ 0.        ,  0.97975361],       [ 0.508968  ,  1.49736071],       [ 0.        ,  1.48202443],       [ 0.39313039,  1.32740355],       [ 0.6055851 ,  1.65007091],       [ 0.47693598,  1.86009836],       [ 0.01030286,  0.52122283],       [ 0.14668608,  1.07262921],       [ 0.        ,  0.72337216],       [ 0.01413059,  1.22892213],       [ 0.00729859,  0.69384223],       [ 0.06845942,  0.54337114],       [ 0.        ,  1.13249505],       [ 0.14917332,  0.97011858],       [ 0.        ,  1.16159356],       [ 0.        ,  1.15185273],       [ 0.        ,  1.23123837],       [ 0.        ,  1.39763153],       [ 0.        ,  1.18636394],       [ 0.46267664,  1.71131682],       [ 0.        ,  0.79262978],       [ 0.        ,  0.72461188],       [ 0.        ,  1.07346065],       [ 0.00893578,  0.73403549],       [ 0.10945368,  0.80879748],       [ 0.        ,  1.10206214],       [ 0.3512677 ,  1.49517918],       [ 0.26637423,  1.08521485],       [ 0.        ,  0.95119166]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   4.84763718e+01],       [  5.47000000e+02,   7.54786968e-01],       [  1.73200000e+03,   4.25574732e+00],       [  5.47700000e+03,   9.91409183e-01],       [  3.16220000e+04,   9.11568820e-01]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   1.46425110e+02],       [  5.47000000e+02,   0.00000000e+00,   1.20874295e+01],       [  1.73200000e+03,   3.00063825e+00,   5.62086248e+00],       [  5.47700000e+03,   6.38932467e-01,   1.41100478e+00],       [  3.16220000e+04,   6.52332842e-01,   1.22672522e+00]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]
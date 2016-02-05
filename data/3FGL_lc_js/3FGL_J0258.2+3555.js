Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.33908248,  1.93953919,  4.94820309,  0.        ,  1.00330138,        2.73251772,  0.        ,  0.21255982,  2.49551439,  1.65407896,        0.20831403,  1.4026432 ,  1.25619638,  1.14201808,  0.20712477,        0.49075541,  0.40475512,  0.80126554,  0.53187788,  2.1615262 ,        1.43123221,  0.        ,  3.25802112,  0.76380664,  1.23208046,        2.23480105,  0.        ,  0.        ,  0.        ,  0.68535531,        2.59071803,  0.        ,  0.        ,  0.        ,  0.35641202,        1.8223449 ,  0.        ,  0.        ,  0.        ,  0.        ,        3.21297693,  0.        ,  1.36671114,  2.85116172,  1.89679933,        3.42935252,  0.        ,  0.77365339]
FluxHistoryError = [[ 0.        ,  3.48976326],       [ 0.779917  ,  3.35388947],       [ 3.22545195,  6.82730865],       [ 0.        ,  2.95232844],       [ 0.        ,  4.08826303],       [ 1.2145524 ,  4.37600994],       [ 0.        ,  1.97649086],       [ 0.        ,  3.39364231],       [ 1.21138835,  3.94635582],       [ 0.27909636,  3.18618011],       [ 0.        ,  3.48020324],       [ 0.        ,  4.61651611],       [ 0.        ,  4.39142263],       [ 0.05564165,  2.53011966],       [ 0.        ,  3.37787443],       [ 0.        ,  4.15526566],       [ 0.        ,  3.75184989],       [ 0.        ,  4.26334339],       [ 0.        ,  3.71228063],       [ 0.55313325,  3.9934392 ],       [ 0.02544308,  2.92485952],       [ 0.        ,  2.4288075 ],       [ 1.52383244,  5.00092316],       [ 0.        ,  3.93909317],       [ 0.        ,  4.45722818],       [ 0.68168855,  3.9130373 ],       [ 0.        ,  3.24633169],       [ 0.        ,  2.2988658 ],       [ 0.        ,  3.27388406],       [ 0.        ,  3.83595908],       [ 1.08130217,  4.31895638],       [ 0.        ,  3.85425591],       [ 0.        ,  2.13339901],       [ 0.        ,  3.36313415],       [ 0.        ,  3.63650045],       [ 0.18419909,  3.59335804],       [ 0.        ,  2.71295309],       [ 0.        ,  2.3557961 ],       [ 0.        ,  3.36931825],       [ 0.        ,  2.32573223],       [ 1.68984807,  4.93332243],       [ 0.        ,  2.38653159],       [ 0.        ,  4.39113426],       [ 1.24937904,  4.6526022 ],       [ 0.27923048,  3.68345928],       [ 1.69055688,  5.29165363],       [ 0.        ,  3.01722622],       [ 0.        ,  4.03008139]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   9.44566650e+01],       [  5.47000000e+02,   1.02013092e+01],       [  1.73200000e+03,   2.32358813e+00],       [  5.47700000e+03,   6.54778967e-04],       [  3.16220000e+04,   1.69933915e-01]]
SpectrumError = [[  1.73000000e+02,   6.16111069e+01,   1.27544006e+02],       [  5.47000000e+02,   4.85784769e+00,   1.56510468e+01],       [  1.73200000e+03,   1.37561142e+00,   3.35958052e+00],       [  5.47700000e+03,   0.00000000e+00,   5.08623086e-01],       [  3.16220000e+04,   6.80543855e-02,   3.22392255e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]
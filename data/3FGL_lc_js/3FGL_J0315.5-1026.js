Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 1.62093759,  4.12075138,  4.31217957,  6.93371964,  1.7409389 ,        4.58691788,  2.28477502,  5.7496624 ,  0.        ,  1.84501767,        0.        ,  0.        ,  1.96864212,  0.93744278,  0.        ,        0.34065828,  1.54258335,  0.        ,  0.        ,  0.95067406,        1.44609976,  0.19576354,  0.        ,  0.        ,  1.29428196,        0.        ,  0.        ,  1.68519568,  0.        ,  0.        ,        0.        ,  1.240291  ,  0.        ,  0.        ,  1.11801338,        1.29644668,  0.46964809,  0.        ,  0.40006068,  0.        ,        0.        ,  0.        ,  1.08546543,  0.        ,  0.        ,        1.3034122 ,  0.        ,  0.        ]
FluxHistoryError = [[ 0.65801114,  2.81295681],       [ 2.85207272,  5.50683689],       [ 2.94152021,  5.81611538],       [ 5.58946657,  8.38828754],       [ 0.59505129,  3.07484269],       [ 3.2751112 ,  6.00041533],       [ 1.20680833,  3.54358459],       [ 4.23773003,  7.38818884],       [ 0.        ,  1.22279561],       [ 0.5863893 ,  3.28185511],       [ 0.        ,  2.10132504],       [ 0.        ,  2.75456905],       [ 0.79280078,  3.27387857],       [ 0.        ,  4.2323215 ],       [ 0.        ,  1.45615828],       [ 0.        ,  3.13817367],       [ 0.42150426,  2.99429131],       [ 0.        ,  1.84660697],       [ 0.        ,  2.7104001 ],       [ 0.14213097,  1.98039532],       [ 0.35418427,  2.92104101],       [ 0.        ,  2.72081251],       [ 0.        ,  3.07548857],       [ 0.        ,  3.19436717],       [ 0.48187518,  2.35807371],       [ 0.        ,  2.10770941],       [ 0.        ,  2.42892408],       [ 0.        ,  5.44738698],       [ 0.        ,  2.73619223],       [ 0.        ,  2.0948565 ],       [ 0.        ,  1.96930122],       [ 0.        ,  4.21808422],       [ 0.        ,  2.4681139 ],       [ 0.        ,  2.82955885],       [ 0.        ,  4.50170636],       [ 0.1396066 ,  2.56916475],       [ 0.        ,  2.73658654],       [ 0.        ,  2.51205111],       [ 0.        ,  2.74222425],       [ 0.        ,  2.11153078],       [ 0.        ,  2.61607552],       [ 0.        ,  2.94974852],       [ 0.2409876 ,  2.19620132],       [ 0.        ,  2.56988239],       [ 0.        ,  2.68440509],       [ 0.02328324,  2.73978138],       [ 0.        ,  2.86207318],       [ 0.        ,  1.35416865]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   8.21315002e+01],       [  5.47000000e+02,   1.44905605e+01],       [  1.73200000e+03,   2.49467421e+00],       [  5.47700000e+03,   1.17000198e+00],       [  3.16220000e+04,   1.07786477e-01]]
SpectrumError = [[  1.73000000e+02,   4.91887970e+01,   1.15865707e+02],       [  5.47000000e+02,   9.63195038e+00,   1.95658855e+01],       [  1.73200000e+03,   1.54085207e+00,   3.53988314e+00],       [  5.47700000e+03,   8.09629381e-01,   1.59469318e+00],       [  3.16220000e+04,   1.95886195e-02,   2.55263507e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]
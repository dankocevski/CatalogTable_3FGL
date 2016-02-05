Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 1.49612093,  0.        ,  0.        ,  1.77755821,  3.09438634,        1.48976767,  0.        ,  4.43100929,  1.17641354,  0.47757828,        2.71696424,  3.72368836,  0.        ,  1.70081162,  1.27587724,        3.78157377,  3.05453372,  2.6064837 ,  3.24059439,  2.61798167,        7.81884003,  4.94834328,  2.61751199,  5.28316689,  5.0653038 ,        2.86336565,  3.51698613,  2.84794188,  4.10583019,  2.60604835,        0.        ,  4.31503677,  0.28606537,  1.72866344,  3.09533191,        4.81132507,  6.18859291,  1.01383638,  0.        ,  1.8964169 ,        6.46882677,  9.41413689,  2.32305026,  7.92027092,  5.35144806,        1.85941172,  0.        ,  3.55635476]
FluxHistoryError = [[  2.63988972e-03,   3.20335197e+00],       [  0.00000000e+00,   3.33725381e+00],       [  0.00000000e+00,   3.24746776e+00],       [  2.25881696e-01,   3.69739151e+00],       [  1.55747068e+00,   4.74895191e+00],       [  0.00000000e+00,   5.73920548e+00],       [  0.00000000e+00,   4.15409184e+00],       [  2.77188158e+00,   6.32322550e+00],       [  0.00000000e+00,   4.67978787e+00],       [  0.00000000e+00,   4.06793559e+00],       [  1.20467329e+00,   4.35216045e+00],       [  1.96899521e+00,   5.58884287e+00],       [  0.00000000e+00,   3.77445912e+00],       [  6.15626574e-02,   3.51345825e+00],       [  0.00000000e+00,   5.52811837e+00],       [  1.67891693e+00,   6.28458834e+00],       [  1.27010632e+00,   5.07409668e+00],       [  0.00000000e+00,   7.76116920e+00],       [  1.55664861e+00,   5.17578745e+00],       [  8.47345233e-01,   4.90629673e+00],       [  5.56862164e+00,   1.02432423e+01],       [  2.67175889e+00,   7.43246078e+00],       [  1.07408559e+00,   4.65283155e+00],       [  3.31534004e+00,   7.38691616e+00],       [  2.96584797e+00,   7.42433310e+00],       [  1.16792393e+00,   4.85248423e+00],       [  1.02727532e+00,   6.13720703e+00],       [  1.22445595e+00,   4.82279158e+00],       [  2.53535223e+00,   5.93005562e+00],       [  1.15463018e-01,   5.18888712e+00],       [  0.00000000e+00,   2.25246525e+00],       [  2.29852533e+00,   6.59697533e+00],       [  0.00000000e+00,   4.68726566e+00],       [  8.23498964e-02,   3.82821965e+00],       [  1.26953137e+00,   5.19871902e+00],       [  2.24253321e+00,   7.46999550e+00],       [  4.12647629e+00,   8.51949596e+00],       [  0.00000000e+00,   4.07640314e+00],       [  0.00000000e+00,   4.16233253e+00],       [  1.71990275e-01,   3.95887780e+00],       [  3.98200703e+00,   9.15771580e+00],       [  7.04407835e+00,   1.18791361e+01],       [  9.32077289e-01,   4.07558060e+00],       [  5.35694408e+00,   1.06701088e+01],       [  3.59372854e+00,   7.29987335e+00],       [  0.00000000e+00,   7.23445511e+00],       [  0.00000000e+00,   3.18371367e+00],       [  8.71786833e-01,   6.18020916e+00]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.65842056e+01],       [  5.47000000e+02,   4.89808350e+01],       [  1.73200000e+03,   1.08449669e+01],       [  5.47700000e+03,   2.69242477e+00],       [  3.16220000e+04,   7.68244028e-01]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   2.30106789e+02],       [  5.47000000e+02,   3.73914680e+01,   6.08138390e+01],       [  1.73200000e+03,   8.88049603e+00,   1.28993139e+01],       [  5.47700000e+03,   2.10378885e+00,   3.34892917e+00],       [  3.16220000e+04,   5.08309066e-01,   1.08664107e+00]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]
Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.81683779,  0.4012796 ,  0.85078245,  0.16450763,  0.34426513,        0.71348941,  0.1811344 ,  0.36867106,  0.01806323,  1.02698362,        0.43187392,  0.6503545 ,  0.        ,  1.07867014,  1.54396403,        0.63099182,  0.20802402,  0.09953012,  0.        ,  0.76376414,        0.98680502,  1.04063118,  0.07774205,  0.72090799,  0.52912915,        0.79029036,  0.08547179,  0.56659818,  0.53143692,  0.75422335,        0.        ,  0.64473748,  0.52448529,  0.61355883,  0.77810526,        0.41141832,  0.34959525,  0.29130167,  0.77828926,  0.69792342,        0.18141161,  0.30137807,  0.        ,  0.65830457,  0.30108297,        0.77171272,  0.52393705,  0.8363114 ]
FluxHistoryError = [[ 0.40440309,  1.32012415],       [ 0.1230126 ,  0.77822089],       [ 0.45224431,  1.34925604],       [ 0.        ,  0.88105834],       [ 0.01549864,  0.77893329],       [ 0.32593903,  1.18640292],       [ 0.        ,  0.91791129],       [ 0.        ,  1.37314796],       [ 0.        ,  0.7247629 ],       [ 0.61653119,  1.51717806],       [ 0.16096702,  0.78461838],       [ 0.31175154,  1.07250905],       [ 0.        ,  0.8111589 ],       [ 0.61901963,  1.62527394],       [ 1.04601943,  2.12069082],       [ 0.25208426,  1.11402416],       [ 0.        ,  1.06915402],       [ 0.        ,  0.9858184 ],       [ 0.        ,  0.85253096],       [ 0.33673915,  1.26409471],       [ 0.53391194,  1.51637173],       [ 0.66724128,  1.48798096],       [ 0.        ,  1.07354159],       [ 0.29053771,  1.22515333],       [ 0.22360545,  0.932392  ],       [ 0.40219209,  1.27589869],       [ 0.        ,  1.05193977],       [ 0.22989827,  0.99791133],       [ 0.21938813,  0.92759967],       [ 0.39086896,  1.21169674],       [ 0.        ,  0.55303556],       [ 0.27544129,  1.11626208],       [ 0.09447563,  1.04896343],       [ 0.29158041,  1.04362416],       [ 0.43183336,  1.20444536],       [ 0.13942739,  0.79465067],       [ 0.00362611,  0.79739314],       [ 0.02941528,  0.65161145],       [ 0.41113776,  1.23312795],       [ 0.26007161,  1.2035712 ],       [ 0.        ,  0.99285088],       [ 0.02894735,  0.68995613],       [ 0.        ,  0.87329763],       [ 0.28586903,  1.12099993],       [ 0.05213027,  0.63617861],       [ 0.36483178,  1.28145194],       [ 0.2036882 ,  0.93958151],       [ 0.39340258,  1.36194992]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.40659148e-02],       [  5.47000000e+02,   2.24305725e+01],       [  1.73200000e+03,   1.14075623e+01],       [  5.47700000e+03,   2.19705081e+00],       [  3.16220000e+04,   1.94489416e-02]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   5.05208446e+01],       [  5.47000000e+02,   1.66875381e+01,   2.83373489e+01],       [  1.73200000e+03,   9.87318611e+00,   1.30166006e+01],       [  5.47700000e+03,   1.70315254e+00,   2.74149036e+00],       [  3.16220000e+04,   0.00000000e+00,   3.36001551e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]
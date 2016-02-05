Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.        ,  1.22284234,  0.        ,  0.59805644,        1.31066799,  0.        ,  0.        ,  1.50081015,  0.84987181,        0.0274197 ,  0.6372695 ,  0.        ,  0.48262611,  0.23328559,        0.21172318,  1.24593258,  0.05363899,  1.71452987,  0.69454324,        0.        ,  0.        ,  0.45692703,  0.03307451,  0.59022677,        0.05559766,  0.        ,  0.        ,  0.34803072,  0.        ,        2.10642886,  0.        ,  0.43440601,  0.33034998,  0.50707263,        0.82873893,  0.90403861,  0.        ,  0.        ,  0.        ,        0.        ,  1.27862966,  0.        ,  0.68341303,  0.8994993 ,        0.        ,  0.        ,  0.        ]
FluxHistoryError = [[ 0.        ,  1.22900379],       [ 0.        ,  1.25505579],       [ 0.43424255,  2.18365502],       [ 0.        ,  1.10226047],       [ 0.        ,  2.47895157],       [ 0.62012523,  2.14728975],       [ 0.        ,  1.16763067],       [ 0.        ,  1.30627775],       [ 0.74455321,  2.40212965],       [ 0.        ,  1.88355017],       [ 0.        ,  1.11059631],       [ 0.14382261,  1.41081119],       [ 0.        ,  1.37101126],       [ 0.        ,  2.50334874],       [ 0.        ,  1.843805  ],       [ 0.        ,  1.24361929],       [ 0.19378757,  2.4670589 ],       [ 0.        ,  1.11060804],       [ 0.84796596,  2.80546212],       [ 0.20448351,  1.34647262],       [ 0.        ,  1.26629972],       [ 0.        ,  1.14877987],       [ 0.14513776,  0.98285067],       [ 0.        ,  1.87393356],       [ 0.11729559,  1.22252071],       [ 0.        ,  2.32277333],       [ 0.        ,  1.40312469],       [ 0.        ,  1.55948234],       [ 0.        ,  1.72590354],       [ 0.        ,  1.52421558],       [ 1.02342498,  3.38395977],       [ 0.        ,  0.78666312],       [ 0.        ,  2.34784517],       [ 0.        ,  1.6477477 ],       [ 0.        ,  2.18788403],       [ 0.07138252,  1.74269271],       [ 0.35349506,  1.62055659],       [ 0.        ,  1.79807174],       [ 0.        ,  1.37800777],       [ 0.        ,  1.91538274],       [ 0.        ,  1.13092875],       [ 0.64809406,  2.07391214],       [ 0.        ,  1.29227817],       [ 0.        ,  2.30605936],       [ 0.07942122,  1.89915371],       [ 0.        ,  1.17112315],       [ 0.        ,  1.52461267],       [ 0.        ,  1.29919839]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   3.22441757e-02],       [  5.47000000e+02,   1.41885204e+01],       [  1.73200000e+03,   1.42153013e+00],       [  5.47700000e+03,   2.61292249e-01],       [  3.16220000e+04,   1.21821411e-01]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   3.48635506e+01],       [  5.47000000e+02,   1.01595793e+01,   1.83936882e+01],       [  1.73200000e+03,   6.46704853e-01,   2.29397559e+00],       [  5.47700000e+03,   9.77767110e-02,   4.95225608e-01],       [  3.16220000e+04,   4.04345021e-02,   2.59060264e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]
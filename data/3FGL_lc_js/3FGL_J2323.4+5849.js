Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 1.884027  ,  0.72417843,  0.89581692,  1.63890111,  1.22422922,        1.68220353,  1.46396029,  2.18987131,  1.87349963,  1.26750457,        0.97776163,  1.16175795,  2.00431299,  2.6109066 ,  1.93241107,        2.03594637,  1.00558996,  1.98361111,  1.05017221,  1.27532935,        1.3895098 ,  1.13233125,  1.35697412,  1.7927413 ,  1.55374742,        1.01238668,  2.01097655,  1.14505219,  2.14203215,  1.69153655,        1.74341106,  1.34337544,  2.182441  ,  1.5899719 ,  2.27656913,        1.47662187,  2.29133511,  1.15147948,  0.98139381,  1.66976178,        1.76095581,  1.45040286,  0.9430669 ,  1.32210958,  1.36113894,        1.98863971,  1.7189461 ,  1.05829859]
FluxHistoryError = [[ 1.36335111,  2.47222185],       [ 0.2282351 ,  1.30338919],       [ 0.52584976,  1.34854007],       [ 1.18808341,  2.15485024],       [ 0.81925833,  1.70525157],       [ 1.18919063,  2.24130702],       [ 1.0041368 ,  1.99702883],       [ 1.61347687,  2.85278034],       [ 1.35218787,  2.46721697],       [ 0.84350216,  1.76449513],       [ 0.58504689,  1.44247293],       [ 0.75767314,  1.63673949],       [ 1.46729064,  2.61197305],       [ 2.09299374,  3.18221688],       [ 1.45035863,  2.47700739],       [ 1.57092774,  2.55511332],       [ 0.57096267,  1.50777221],       [ 1.52450776,  2.50206351],       [ 0.68886214,  1.4698329 ],       [ 0.84306145,  1.77779162],       [ 0.9761529 ,  1.86222601],       [ 0.731839  ,  1.59635925],       [ 0.95555103,  1.81665707],       [ 1.33956003,  2.30932045],       [ 1.12914252,  2.03794456],       [ 0.62863123,  1.48282683],       [ 1.5081073 ,  2.57212162],       [ 0.78679609,  1.56457174],       [ 1.6219213 ,  2.72292089],       [ 1.24751234,  2.19095731],       [ 1.25232875,  2.29712152],       [ 0.91362411,  1.83119011],       [ 1.66970778,  2.75893831],       [ 1.16515696,  2.07686496],       [ 1.81137991,  2.78767872],       [ 1.01606977,  1.99820518],       [ 1.80013275,  2.83810616],       [ 0.72983557,  1.64938056],       [ 0.61834449,  1.41715932],       [ 1.27568126,  2.1124351 ],       [ 1.3053205 ,  2.27329826],       [ 1.0359515 ,  1.92158532],       [ 0.56923407,  1.39957666],       [ 0.93083727,  1.77116275],       [ 0.93097901,  1.8544265 ],       [ 1.53601992,  2.49669337],       [ 1.28272927,  2.20943499],       [ 0.61286759,  1.57767439]], dtype=float32
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   2.16988823e-03],       [  5.47000000e+02,   5.90878639e+01],       [  1.73200000e+03,   3.81050491e+01],       [  5.47700000e+03,   1.70645962e+01],       [  3.16220000e+04,   4.95774698e+00]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   3.18379949e+01],       [  5.47000000e+02,   5.05572090e+01,   6.77499847e+01],       [  1.73200000e+03,   3.54107704e+01,   4.07993279e+01],       [  5.47700000e+03,   1.58890600e+01,   1.82401333e+01],       [  3.16220000e+04,   4.40563631e+00,   5.54944277e+00]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]
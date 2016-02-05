Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.27981627,  0.        ,  0.81926459,  0.        ,  0.        ,        0.        ,  0.36233255,  0.        ,  0.        ,  0.06051105,        0.        ,  0.        ,  0.        ,  0.        ,  0.55832952,        1.04230034,  0.93936151,  0.75525135,  1.0138135 ,  0.86216813,        0.83934355,  0.84344774,  0.48131207,  0.        ,  0.        ,        0.        ,  0.        ,  0.2453312 ,  0.2546736 ,  0.        ,        0.82927299,  0.        ,  1.52878594,  1.00490165,  0.        ,        0.67033297,  0.        ,  0.        ,  0.6536777 ,  0.94887513,        1.18457925,  0.06955937,  0.        ,  0.47444889,  0.30462432,        0.72044951,  0.17383245,  0.        ]
FluxHistoryError = [[ 0.        ,  1.67483437],       [ 0.        ,  1.01616371],       [ 0.33409926,  1.45367599],       [ 0.        ,  1.07530415],       [ 0.        ,  1.15793097],       [ 0.        ,  1.26965439],       [ 0.04988378,  0.83957809],       [ 0.        ,  1.10830057],       [ 0.        ,  0.98142338],       [ 0.        ,  1.20209903],       [ 0.        ,  1.10981786],       [ 0.        ,  1.04647839],       [ 0.        ,  0.85309672],       [ 0.        ,  1.46904075],       [ 0.05849871,  1.38068724],       [ 0.42437953,  1.97096658],       [ 0.22438711,  2.14383602],       [ 0.2157433 ,  1.55011332],       [ 0.12056786,  2.03034949],       [ 0.29448998,  1.71641159],       [ 0.30344921,  1.65122044],       [ 0.35813382,  1.55737281],       [ 0.15236983,  1.071275  ],       [ 0.        ,  1.32300651],       [ 0.        ,  0.72983342],       [ 0.        ,  1.12204838],       [ 0.        ,  1.07367039],       [ 0.        ,  1.63236085],       [ 0.        ,  1.87495267],       [ 0.        ,  1.02616823],       [ 0.31606925,  1.64287293],       [ 0.        ,  0.92084116],       [ 0.72765398,  2.50492167],       [ 0.46175063,  1.73198342],       [ 0.        ,  1.09594297],       [ 0.17995772,  1.49291015],       [ 0.        ,  1.05373561],       [ 0.        ,  1.96195078],       [ 0.20098227,  1.29190302],       [ 0.26220465,  1.89540708],       [ 0.56513655,  2.04358268],       [ 0.        ,  1.9272677 ],       [ 0.        ,  1.50933576],       [ 0.1492056 ,  1.01588738],       [ 0.        ,  2.25541282],       [ 0.03790259,  1.60511518],       [ 0.        ,  2.06360844],       [ 0.        ,  1.1078949 ]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.58761770e-01],       [  5.47000000e+02,   1.61953974e+00],       [  1.73200000e+03,   1.73982489e+00],       [  5.47700000e+03,   1.39579821e+00],       [  3.16220000e+04,   4.58939105e-01]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   9.08573854e+01],       [  5.47000000e+02,   0.00000000e+00,   1.43328271e+01],       [  1.73200000e+03,   6.98837996e-01,   2.90662670e+00],       [  5.47700000e+03,   9.98067677e-01,   1.85945952e+00],       [  3.16220000e+04,   2.68878818e-01,   7.11313486e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]
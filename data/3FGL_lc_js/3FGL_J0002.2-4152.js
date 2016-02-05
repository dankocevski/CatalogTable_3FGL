Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.97335756,  0.87654024,  0.89848083,  1.08729315,  2.59028506,        0.        ,  0.        ,  1.11266887,  0.75142246,  0.        ,        0.        ,  0.        ,  0.        ,  0.95484895,  1.13008642,        1.36505544,  0.57213378,  0.37513766,  0.        ,  0.        ,        0.        ,  0.36135823,  1.77125323,  0.        ,  0.3631694 ,        0.        ,  0.12483905,  0.97295046,  0.        ,  0.94329089,        0.45713073,  0.        ,  0.37348497,  0.04349332,  0.        ,        0.        ,  0.        ,  0.53603768,  0.32345963,  0.        ,        0.        ,  0.        ,  1.06151927,  0.        ,  0.61179024,        0.        ,  0.        ,  0.        ]
FluxHistoryError = [[ 0.36101842,  1.77482462],       [ 0.19389707,  1.73513627],       [ 0.31100416,  1.66040444],       [ 0.51347595,  1.81709623],       [ 1.70726514,  3.6089282 ],       [ 0.        ,  0.97803962],       [ 0.        ,  1.21863425],       [ 0.37218547,  1.96625376],       [ 0.28958905,  1.41608095],       [ 0.        ,  1.38014698],       [ 0.        ,  1.109231  ],       [ 0.        ,  1.80050945],       [ 0.        ,  1.28771186],       [ 0.28032559,  1.85103393],       [ 0.52991486,  1.87257624],       [ 0.5728454 ,  2.3601799 ],       [ 0.12655175,  1.19547212],       [ 0.03498805,  0.8802985 ],       [ 0.        ,  1.78598547],       [ 0.        ,  0.90467054],       [ 0.        ,  1.69270504],       [ 0.09818935,  0.80703598],       [ 1.04857492,  2.6485424 ],       [ 0.        ,  0.96080291],       [ 0.03170216,  0.874933  ],       [ 0.        ,  1.29603171],       [ 0.        ,  1.30505644],       [ 0.45192933,  1.70519161],       [ 0.        ,  0.8636061 ],       [ 0.18950665,  1.8403616 ],       [ 0.07727748,  1.00830209],       [ 0.        ,  1.60171747],       [ 0.        ,  2.26805973],       [ 0.        ,  1.01672994],       [ 0.        ,  1.85398686],       [ 0.        ,  0.69293398],       [ 0.        ,  1.48455405],       [ 0.04226035,  1.20063984],       [ 0.        ,  1.97892141],       [ 0.        ,  1.34788239],       [ 0.        ,  1.15291536],       [ 0.        ,  1.12504411],       [ 0.51870978,  1.71294093],       [ 0.        ,  1.52756011],       [ 0.14654559,  1.23817253],       [ 0.        ,  0.84560633],       [ 0.        ,  1.21257293],       [ 0.        ,  1.28396809]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   5.31076012e+01],       [  5.47000000e+02,   5.65954733e+00],       [  1.73200000e+03,   8.52913857e-01],       [  5.47700000e+03,   9.76304948e-01],       [  3.16220000e+04,   2.59035975e-01]]
SpectrumError = [[  1.73000000e+02,   3.11469517e+01,   7.48536758e+01],       [  5.47000000e+02,   2.82339716e+00,   8.72975826e+00],       [  1.73200000e+03,   2.65311718e-01,   1.55741119e+00],       [  5.47700000e+03,   6.69633269e-01,   1.34113908e+00],       [  3.16220000e+04,   1.18986383e-01,   4.53454435e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]
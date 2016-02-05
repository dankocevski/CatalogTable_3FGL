Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 3.86814499,  0.21042258,  0.        ,  0.93788332,  0.        ,        0.10658839,  1.24994075,  0.        ,  0.95697892,  1.47196913,        0.        ,  0.        ,  3.85982084,  3.35348415,  2.13840723,        1.4882946 ,  1.36612797,  0.        ,  3.1004312 ,  2.18078136,        0.70900905,  1.74297357,  0.51502562,  5.08921862,  0.69623798,        1.47074151,  0.17978628,  2.61959839,  0.93499625,  0.        ,        0.        ,  1.66466379,  0.        ,  0.        ,  2.89416814,        1.77442825,  1.73890293,  0.        ,  0.        ,  0.27087331,        0.        ,  0.        ,  1.07826233,  0.        ,  1.17942762,        0.993339  ,  0.        ,  0.        ]
FluxHistoryError = [[ 2.13703156,  5.74002981],       [ 0.        ,  3.45758015],       [ 0.        ,  3.0101254 ],       [ 0.        ,  3.41608518],       [ 0.        ,  2.69390464],       [ 0.        ,  3.06784203],       [ 0.        ,  4.33833563],       [ 0.        ,  2.18051672],       [ 0.        ,  3.90277231],       [ 0.22049844,  2.97840142],       [ 0.        ,  2.07632589],       [ 0.        ,  2.26352453],       [ 2.38966942,  5.49028778],       [ 2.09497404,  4.72319126],       [ 0.94058728,  3.40963507],       [ 0.46669042,  2.64132357],       [ 0.38626152,  2.48918056],       [ 0.        ,  2.50524831],       [ 1.84683895,  4.42720413],       [ 0.96379232,  3.53594494],       [ 0.        ,  2.83287346],       [ 0.63707387,  3.04705381],       [ 0.        ,  3.23253036],       [ 3.84250307,  6.42753029],       [ 0.        ,  2.97111362],       [ 0.25945377,  2.81624651],       [ 0.        ,  2.41247375],       [ 1.38344407,  3.95516205],       [ 0.22342992,  1.93473673],       [ 0.        ,  2.52690339],       [ 0.        ,  1.98276436],       [ 0.61120522,  2.94041038],       [ 0.        ,  1.67097521],       [ 0.        ,  2.53780055],       [ 1.62603164,  4.26406527],       [ 0.74045622,  2.92538691],       [ 0.59146607,  3.10208273],       [ 0.        ,  2.73327041],       [ 0.        ,  3.00567651],       [ 0.        ,  2.58141661],       [ 0.        ,  1.50195169],       [ 0.        ,  1.80617654],       [ 0.        ,  3.38812733],       [ 0.        ,  2.2004087 ],       [ 0.08117843,  2.41626644],       [ 0.        ,  3.26309556],       [ 0.        ,  2.16403604],       [ 0.        ,  1.90883172]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.23411423e+02],       [  5.47000000e+02,   1.05000763e+01],       [  1.73200000e+03,   2.34769988e+00],       [  5.47700000e+03,   5.63975334e-01],       [  3.16220000e+04,   7.02682287e-02]]
SpectrumError = [[  1.73000000e+02,   9.11896591e+01,   1.54472702e+02],       [  5.47000000e+02,   6.24077415e+00,   1.48946095e+01],       [  1.73200000e+03,   1.52834988e+00,   3.22128129e+00],       [  5.47700000e+03,   3.39572310e-01,   8.33727837e-01],       [  3.16220000e+04,   0.00000000e+00,   3.77401993e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]
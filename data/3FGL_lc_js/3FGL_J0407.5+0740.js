Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 2.27188182,  3.48091364,  3.30537701,  3.98102236,  0.        ,        0.        ,  1.22604573,  7.08647776,  2.16919541,  4.39893055,        1.86085427,  3.94684243,  1.35504723,  0.        ,  3.6948657 ,        2.56955242,  2.60651851,  4.23634815,  0.        ,  3.22092152,        1.67346561,  4.36162519,  6.86680031,  4.05878305,  0.        ,        4.29248428,  1.4878583 ,  0.54228961,  4.15899801,  0.92731297,        4.35735798,  2.67094898,  0.62921649,  2.40209889,  1.53735673,        1.25661647,  1.8061769 ,  0.        ,  2.17624617,  1.04982543,        2.17022562,  1.86696935,  2.33167362,  2.17613268,  4.31889677,        3.9519155 ,  2.8020997 ,  2.45543313]
FluxHistoryError = [[ 0.58282363,  4.15263653],       [ 2.030586  ,  5.09784985],       [ 1.57122672,  5.18714142],       [ 2.33664274,  5.74629831],       [ 0.        ,  2.94551873],       [ 0.        ,  3.27382064],       [ 0.        ,  4.36940086],       [ 4.94556999,  9.38900185],       [ 0.86169326,  3.70858669],       [ 2.4681325 ,  6.48649979],       [ 0.57802987,  3.34270859],       [ 2.10153627,  5.97670221],       [ 0.        ,  4.47116399],       [ 0.        ,  3.49236226],       [ 1.57927895,  6.04158449],       [ 1.08544409,  4.46904612],       [ 0.99533069,  4.69561577],       [ 2.24709916,  6.41839218],       [ 0.        ,  3.16768098],       [ 1.29388905,  5.31381702],       [ 0.        ,  5.98903453],       [ 2.36878943,  6.53773212],       [ 4.58692551,  9.2988081 ],       [ 2.13065815,  6.24699593],       [ 0.        ,  2.81632304],       [ 2.51868701,  6.25561428],       [ 0.        ,  5.72432899],       [ 0.        ,  4.25287378],       [ 1.95051217,  6.57078934],       [ 0.        ,  4.38590133],       [ 2.39737701,  6.45086956],       [ 0.74458516,  4.82765484],       [ 0.        ,  4.78693086],       [ 0.44985819,  4.62384987],       [ 0.12452471,  3.26777935],       [ 0.        ,  4.93972075],       [ 0.19526243,  3.6766057 ],       [ 0.        ,  4.14737082],       [ 0.03527498,  4.58797264],       [ 0.        ,  5.39041686],       [ 0.26960349,  4.33231926],       [ 0.        ,  5.7897203 ],       [ 0.44411361,  4.41751575],       [ 0.59316075,  3.99810362],       [ 2.22355437,  6.6168499 ],       [ 1.80721569,  6.31405067],       [ 0.63306785,  5.26936674],       [ 0.70327079,  4.36502123]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   2.19267883e+02],       [  5.47000000e+02,   2.83160477e+01],       [  1.73200000e+03,   4.92260456e+00],       [  5.47700000e+03,   4.06204760e-01],       [  3.16220000e+04,   3.14156920e-01]]
SpectrumError = [[  1.73000000e+02,   1.78838898e+02,   2.60160645e+02],       [  5.47000000e+02,   2.17114697e+01,   3.51110611e+01],       [  1.73200000e+03,   3.56237078e+00,   6.37547350e+00],       [  5.47700000e+03,   9.75655019e-02,   7.88794994e-01],       [  3.16220000e+04,   1.68078065e-01,   5.16869783e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]
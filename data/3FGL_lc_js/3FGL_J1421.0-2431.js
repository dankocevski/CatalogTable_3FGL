Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.60195899,  0.        ,  0.53199643,  0.        ,  1.18746352,        0.        ,  0.02837951,  0.        ,  2.14356136,  0.65919006,        0.70229965,  0.26419932,  0.        ,  0.12267378,  0.        ,        0.        ,  0.        ,  1.5589422 ,  0.        ,  0.        ,        0.6268822 ,  0.        ,  1.43358505,  0.64329052,  1.31719673,        0.680188  ,  0.        ,  0.        ,  0.92890292,  2.13967085,        0.76824456,  1.38767326,  0.        ,  1.69953227,  2.08760595,        0.11889842,  0.8317638 ,  1.92556286,  0.        ,  0.91577756,        3.2931211 ,  0.        ,  0.44239289,  1.03651977,  0.72834367,        1.01959372,  2.02545547,  0.        ]
FluxHistoryError = [[ 0.07995784,  1.28342795],       [ 0.        ,  1.53200722],       [ 0.        ,  2.5562889 ],       [ 0.        ,  1.65572429],       [ 0.37309361,  2.17919922],       [ 0.        ,  1.90457213],       [ 0.        ,  2.05522019],       [ 0.        ,  1.60013175],       [ 1.1707871 ,  3.24575186],       [ 0.        ,  2.6744355 ],       [ 0.        ,  2.62337047],       [ 0.        ,  2.00344092],       [ 0.        ,  2.28200316],       [ 0.        ,  2.19165567],       [ 0.        ,  1.79818082],       [ 0.        ,  1.67668068],       [ 0.        ,  1.97419858],       [ 0.55047381,  2.85472107],       [ 0.        ,  1.8336761 ],       [ 0.        ,  1.93459153],       [ 0.02302223,  1.53039122],       [ 0.        ,  2.49079776],       [ 0.54141629,  2.6465044 ],       [ 0.        ,  2.76109862],       [ 0.28002584,  2.59220815],       [ 0.        ,  2.72385222],       [ 0.        ,  3.1952095 ],       [ 0.        ,  2.26086736],       [ 0.13789237,  1.92916608],       [ 1.25501204,  3.2098093 ],       [ 0.14141196,  1.60441256],       [ 0.        ,  4.51057708],       [ 0.        ,  1.52732849],       [ 0.59620857,  3.19469261],       [ 1.19945335,  3.11568069],       [ 0.        ,  2.5249286 ],       [ 0.07818776,  1.77548409],       [ 0.75197208,  3.28949475],       [ 0.        ,  2.71276164],       [ 0.15308976,  1.91620207],       [ 1.91257417,  4.86471033],       [ 0.        ,  1.74611104],       [ 0.        ,  2.46554905],       [ 0.10603493,  2.20590544],       [ 0.22230023,  1.51343036],       [ 0.13530099,  2.27321434],       [ 1.18206072,  3.03255558],       [ 0.        ,  2.98581672]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   4.94444656e+00],       [  5.47000000e+02,   1.52812691e+01],       [  1.73200000e+03,   4.28375006e+00],       [  5.47700000e+03,   8.16832781e-01],       [  3.16220000e+04,   1.71893987e-06]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   7.66013069e+01],       [  5.47000000e+02,   1.00048170e+01,   2.07910557e+01],       [  1.73200000e+03,   3.22295618e+00,   5.43244457e+00],       [  5.47700000e+03,   5.11927128e-01,   1.18591261e+00],       [  3.16220000e+04,   0.00000000e+00,   3.35796347e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]